import { Router, type IRouter } from "express";
import { db, contactRequestsTable } from "@workspace/db";
import {
  SubmitContactRequestBody,
  SubmitContactRequestResponse,
} from "@workspace/api-zod";

const router: IRouter = Router();

router.post("/contact", async (req, res): Promise<void> => {
  const parsed = SubmitContactRequestBody.safeParse(req.body);
  if (!parsed.success) {
    req.log.warn(
      { errors: parsed.error.message },
      "Invalid contact form submission",
    );
    res.status(400).json({ error: "Bitte überprüfe deine Angaben." });
    return;
  }

  const {
    honeypot,
    privacyAccepted,
    company,
    website,
    ...rest
  } = parsed.data;

  // Honeypot field: real visitors never fill this in. Silently accept the
  // request (so bots don't learn it was rejected) without persisting it.
  if (honeypot != null && honeypot.trim().length > 0) {
    req.log.warn("Honeypot triggered on contact form submission");
    res.status(201).json({
      id: 0,
      createdAt: new Date().toISOString(),
      company: company ?? null,
      website: website ?? null,
      ...rest,
    });
    return;
  }

  if (!privacyAccepted) {
    res
      .status(400)
      .json({ error: "Bitte stimme der Datenschutzerklärung zu." });
    return;
  }

  const [row] = await db
    .insert(contactRequestsTable)
    .values({
      ...rest,
      company: company ?? null,
      website: website ?? null,
      privacyAccepted,
    })
    .returning();

  req.log.info({ contactRequestId: row.id }, "New contact request received");

  res.status(201).json(SubmitContactRequestResponse.parse(row));
});

export default router;
