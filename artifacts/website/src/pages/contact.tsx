import React, { useState, useEffect } from "react";
import { Layout } from "@/components/layout";
import { useDocumentTitle } from "@/hooks/use-document-title";
import { useScrollToTop, servicesList } from "@/lib/constants";
import { brand } from "@/config/brand";
import { useSubmitContactRequest } from "@workspace/api-client-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocation } from "wouter";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage,
  FormDescription
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, "Bitte geben Sie Ihren Namen ein"),
  company: z.string().optional(),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein"),
  website: z.string().optional(),
  service: z.string().min(1, "Bitte wählen Sie eine Leistung aus"),
  challenge: z.string().min(10, "Bitte beschreiben Sie Ihre Herausforderung (min. 10 Zeichen)"),
  goal: z.string().min(10, "Bitte beschreiben Sie Ihr Ziel (min. 10 Zeichen)"),
  timeline: z.string().min(1, "Bitte wählen Sie einen Zeitrahmen aus"),
  budget: z.string().min(1, "Bitte wählen Sie ein Budget aus"),
  message: z.string().min(10, "Bitte hinterlassen Sie eine Nachricht (min. 10 Zeichen)"),
  privacyAccepted: z.boolean().refine(val => val === true, {
    message: "Sie müssen die Datenschutzerklärung akzeptieren, um fortzufahren"
  }),
  honeypot: z.string().optional()
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  useDocumentTitle("Kontakt");
  useScrollToTop();
  
  const [location] = useLocation();
  const [isSuccess, setIsSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  // Extract service from URL if present (?service=...)
  // Since wouter's useSearch isn't fully robust for parsing search params in all scenarios,
  // we can use standard URLSearchParams with window.location.search
  const searchParams = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : "");
  const preselectedService = searchParams.get("service") || "";

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      website: "",
      service: preselectedService,
      challenge: "",
      goal: "",
      timeline: "",
      budget: "",
      message: "",
      privacyAccepted: false,
      honeypot: ""
    }
  });

  // Automatically select service if it changes in URL
  useEffect(() => {
    if (preselectedService && servicesList.some(s => s.id === preselectedService)) {
      form.setValue("service", preselectedService);
    }
  }, [preselectedService, form]);

  const mutation = useSubmitContactRequest();

  const onSubmit = (data: ContactFormValues) => {
    setServerError(null);
    
    mutation.mutate(
      { data },
      {
        onSuccess: () => {
          setIsSuccess(true);
        },
        onError: (error: any) => {
          console.error("Form submission error:", error);
          const message = error?.data?.error || "Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später noch einmal.";
          setServerError(message);
        }
      }
    );
  };

  return (
    <Layout>
      <section className="page-hero">
        <div className="site-container">
          <div className="max-w-3xl space-y-6 fade-in">
            <h1 className="page-title">
              Projektanfrage
            </h1>
            <p className="lead">
              Lassen Sie uns Ihr Vorhaben strukturieren. Füllen Sie das Formular aus, und ich melde mich zeitnah mit den nächsten Schritten bei Ihnen.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
            {/* Contact Info */}
            <div className="lg:col-span-4 space-y-10 slide-up">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-foreground">Was passiert als Nächstes?</h3>
                <ol className="space-y-4 text-muted-foreground relative border-l border-border ml-3 pl-6">
                  <li className="relative">
                    <span className="absolute -left-[31px] bg-background border border-border w-6 h-6 rounded-sm flex items-center justify-center text-xs font-medium text-foreground">1</span>
                    <strong className="text-foreground block mb-1">Prüfung</strong>
                    Ich schaue mir Ihre Angaben in Ruhe an und prüfe, ob und wie ich helfen kann.
                  </li>
                  <li className="relative">
                    <span className="absolute -left-[31px] bg-background border border-border w-6 h-6 rounded-sm flex items-center justify-center text-xs font-medium text-foreground">2</span>
                    <strong className="text-foreground block mb-1">Erstgespräch</strong>
                    Wir vereinbaren ein 30-minütiges Gespräch, um Details zu klären.
                  </li>
                  <li className="relative">
                    <span className="absolute -left-[31px] bg-background border border-border w-6 h-6 rounded-sm flex items-center justify-center text-xs font-medium text-foreground">3</span>
                    <strong className="text-foreground block mb-1">Vorschlag</strong>
                    Sie erhalten einen konkreten Vorschlag mit Budget- und Zeitrahmen.
                  </li>
                </ol>
              </div>

              <div className="p-6 bg-surface border border-border rounded-sm">
                <h3 className="font-semibold mb-4 text-foreground">Direkter Kontakt</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">E-Mail:</strong><br />
                    <a href={`mailto:${brand.email}`} className="hover:text-primary transition-colors">{brand.email}</a>
                  </p>
                  <p>
                    <strong className="text-foreground">Telefon:</strong><br />
                    <a href={`tel:${brand.phone.replace(/\s+/g, '')}`} className="hover:text-primary transition-colors">{brand.phone}</a>
                  </p>
                  <p>
                    <strong className="text-foreground">Standort:</strong><br />
                    {brand.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-8 slide-up stagger-1">
              <div className="border-y border-border py-8 ">
                
                {isSuccess ? (
                  <div className="flex flex-col items-center justify-center text-center py-16 space-y-6">
                    <div className="w-16 h-16 bg-green-50 text-green-600 rounded-sm flex items-center justify-center">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h2 className="text-2xl font-semibold">Vielen Dank für Ihre Anfrage!</h2>
                    <p className="text-muted-foreground max-w-md">
                      Ihre Nachricht wurde erfolgreich übermittelt. Ich werde mich innerhalb der nächsten 48 Stunden bei Ihnen melden.
                    </p>
                    <Button onClick={() => window.location.href = "/"} variant="outline" className="mt-4">
                      Zurück zur Startseite
                    </Button>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                      
                      {serverError && (
                        <div className="p-4 bg-destructive/10 text-destructive border border-destructive/20 rounded-md flex gap-3 items-start">
                          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                          <p className="text-sm font-medium">{serverError}</p>
                        </div>
                      )}

                      <div className="space-y-6">
                        <h3 className="text-lg font-medium border-b border-border pb-2">Kontaktdaten</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Name *</FormLabel>
                                <FormControl>
                                  <Input placeholder="Max Mustermann" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="company"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Unternehmen</FormLabel>
                                <FormControl>
                                  <Input placeholder="Musterfirma GmbH" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>E-Mail *</FormLabel>
                                <FormControl>
                                  <Input placeholder="max@musterfirma.de" type="email" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="website"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Website</FormLabel>
                                <FormControl>
                                  <Input placeholder="https://www.musterfirma.de" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>

                      <div className="space-y-6 pt-4">
                        <h3 className="text-lg font-medium border-b border-border pb-2">Projekt-Details</h3>
                        
                        <FormField
                          control={form.control}
                          name="service"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Gewünschte Leistung *</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value} value={field.value}>
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Bitte wählen..." />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {servicesList.map(service => (
                                    <SelectItem key={service.id} value={service.id}>
                                      {service.title}
                                    </SelectItem>
                                  ))}
                                  <SelectItem value="other">Andere / Unsicher</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="challenge"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Was ist Ihre größte aktuelle Herausforderung? *</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Beschreiben Sie kurz das Problem, das Sie lösen möchten..." 
                                  className="resize-y min-h-[100px]" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="goal"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Was ist das gewünschte Ergebnis? *</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Woran machen Sie fest, ob das Projekt erfolgreich war?" 
                                  className="resize-y min-h-[100px]" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="timeline"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Geplanter Zeitrahmen *</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Bitte wählen..." />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="asap">So schnell wie möglich</SelectItem>
                                    <SelectItem value="1-3-months">1-3 Monate</SelectItem>
                                    <SelectItem value="3-6-months">3-6 Monate</SelectItem>
                                    <SelectItem value="flexible">Flexibel</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="budget"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Ungefähres Budget (Netto) *</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                  <FormControl>
                                    <SelectTrigger>
                                      <SelectValue placeholder="Bitte wählen..." />
                                    </SelectTrigger>
                                  </FormControl>
                                  <SelectContent>
                                    <SelectItem value="<3k">Unter 3.000 €</SelectItem>
                                    <SelectItem value="3k-5k">3.000 € - 5.000 €</SelectItem>
                                    <SelectItem value="5k-10k">5.000 € - 10.000 €</SelectItem>
                                    <SelectItem value=">10k">Über 10.000 €</SelectItem>
                                    <SelectItem value="unknown">Noch unklar</SelectItem>
                                  </SelectContent>
                                </Select>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>

                        <FormField
                          control={form.control}
                          name="message"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Zusätzliche Nachricht / Anmerkungen *</FormLabel>
                              <FormControl>
                                <Textarea 
                                  placeholder="Haben Sie noch weitere Informationen für mich?" 
                                  className="resize-y min-h-[100px]" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Honeypot Field - visually hidden but available to screen readers / bots */}
                      <FormField
                        control={form.control}
                        name="honeypot"
                        render={({ field }) => (
                          <FormItem className="absolute w-[1px] h-[1px] p-0 m-[-1px] overflow-hidden clip-rect-0 border-0">
                            <FormLabel aria-hidden="true">Bitte dieses Feld leer lassen (Spam-Schutz)</FormLabel>
                            <FormControl>
                              <Input tabIndex={-1} autoComplete="off" aria-hidden="true" {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />

                      <div className="pt-6 border-t border-border space-y-6">
                        <FormField
                          control={form.control}
                          name="privacyAccepted"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-start space-x-3 space-y-0 p-4 border border-border rounded-sm bg-muted/20">
                              <FormControl>
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                              <div className="space-y-1 leading-none">
                                <FormLabel className="font-normal text-sm cursor-pointer">
                                  Ich stimme zu, dass meine Angaben aus dem Kontaktformular zur Beantwortung meiner Anfrage erhoben und verarbeitet werden. *
                                </FormLabel>
                                <FormDescription className="text-xs">
                                  Detaillierte Informationen zum Umgang mit Nutzerdaten finden Sie in der <a href="/datenschutz" className="underline hover:text-primary">Datenschutzerklärung</a>.
                                </FormDescription>
                                <FormMessage />
                              </div>
                            </FormItem>
                          )}
                        />

                        <Button 
                          type="submit" 
                          className="w-full h-14 text-base" 
                          disabled={mutation.isPending}
                        >
                          {mutation.isPending ? (
                            <>
                              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                              Anfrage wird gesendet...
                            </>
                          ) : (
                            "Kostenloses Erstgespräch anfragen"
                          )}
                        </Button>
                        <p className="text-xs text-center text-muted-foreground">
                          Mit dem Absenden verpflichten Sie sich zu nichts. Es handelt sich um eine unverbindliche Anfrage.
                        </p>
                      </div>

                    </form>
                  </Form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
