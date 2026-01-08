import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-1 max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/">
            <Button variant="outline" size="sm" className="mb-6">
              ← Torna alla Home
            </Button>
          </Link>
          
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-sm">
            Ultimo aggiornamento: Gennaio 2026
          </p>
        </div>

        <div className="prose prose-sm max-w-none space-y-6">
          {/* Introduzione */}
          <section className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Introduzione
            </h2>
            <p className="text-foreground leading-relaxed">
              La presente Privacy Policy descrive come <strong>Carta Studenti</strong> raccoglie, utilizza, protegge e gestisce i dati personali forniti dagli utenti attraverso il nostro sito web. Ci impegniamo a proteggere la tua privacy e a garantire la massima trasparenza nel trattamento dei tuoi dati.
            </p>
          </section>

          {/* Dati Raccolti */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">
              1. Dati Personali Raccolti
            </h2>
            <p className="text-foreground mb-4">
              Raccogliamo i seguenti dati personali solo quando volontariamente forniti:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
              <li><strong>Modulo Contatti:</strong> Nome, email, telefono, messaggio</li>
              <li><strong>Newsletter:</strong> Indirizzo email</li>
              <li><strong>Dati di Navigazione:</strong> Indirizzo IP, tipo di browser, pagine visitate (tramite analytics)</li>
            </ul>
            <p className="text-foreground mt-4">
              Non raccogliamo dati sensibili come informazioni sulla salute, religione, orientamento politico o dati biometrici.
            </p>
          </section>

          {/* Finalità del Trattamento */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">
              2. Finalità del Trattamento dei Dati
            </h2>
            <p className="text-foreground mb-4">
              I tuoi dati personali vengono utilizzati esclusivamente per:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
              <li>Rispondere alle tue richieste di contatto</li>
              <li>Inviare comunicazioni sulla newsletter (solo se iscritto)</li>
              <li>Notificare nuovi sconti e convenzioni partner</li>
              <li>Migliorare l'esperienza utente del sito</li>
              <li>Adempiere agli obblighi legali</li>
            </ul>
            <p className="text-foreground mt-4">
              <strong>Non utilizziamo mai i tuoi dati per scopi commerciali diversi da quelli dichiarati.</strong>
            </p>
          </section>

          {/* Sicurezza dei Dati */}
          <section className="bg-green-50 p-6 rounded-lg border border-green-200">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              3. Sicurezza e Protezione dei Dati
            </h2>
            <p className="text-foreground mb-4">
              Implementiamo misure di sicurezza avanzate per proteggere i tuoi dati:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
              <li><strong>Crittografia SSL/TLS:</strong> Tutti i dati trasmessi sono crittografati</li>
              <li><strong>Database Sicuri:</strong> I dati sono archiviati in database protetti con autenticazione</li>
              <li><strong>Accesso Limitato:</strong> Solo il personale autorizzato può accedere ai dati</li>
              <li><strong>Backup Regolari:</strong> Eseguiamo backup frequenti per prevenire perdite di dati</li>
              <li><strong>Monitoraggio Continuo:</strong> Monitoriamo costantemente il sistema per rilevare anomalie</li>
              <li><strong>Conformità GDPR:</strong> Rispettiamo pienamente il Regolamento Generale sulla Protezione dei Dati (GDPR)</li>
            </ul>
          </section>

          {/* Non Divulgazione */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">
              4. Non Divulgazione dei Dati
            </h2>
            <p className="text-foreground mb-4">
              <strong>I tuoi dati personali non saranno mai divulgati a terzi</strong> senza il tuo esplicito consenso, eccetto:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
              <li>Quando richiesto dalla legge o da autorità competenti</li>
              <li>A fornitori di servizi strettamente necessari (es. hosting provider) che sono vincolati da accordi di riservatezza</li>
              <li>Non vendiamo, affittiamo o scambiamo i tuoi dati con altre aziende</li>
            </ul>
            <p className="text-foreground mt-4">
              I partner commerciali della Carta Studenti <strong>non hanno accesso ai tuoi dati personali</strong> a meno che tu non li contatti direttamente.
            </p>
          </section>

          {/* Diritti dell'Utente */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">
              5. I Tuoi Diritti
            </h2>
            <p className="text-foreground mb-4">
              Secondo il GDPR, hai il diritto di:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
              <li><strong>Accesso:</strong> Richiedere una copia dei tuoi dati personali</li>
              <li><strong>Rettifica:</strong> Correggere dati inesatti</li>
              <li><strong>Cancellazione:</strong> Richiedere l'eliminazione dei tuoi dati ("diritto all'oblio")</li>
              <li><strong>Limitazione:</strong> Limitare il trattamento dei tuoi dati</li>
              <li><strong>Portabilità:</strong> Ricevere i tuoi dati in formato strutturato</li>
              <li><strong>Opposizione:</strong> Opporsi al trattamento dei tuoi dati</li>
              <li><strong>Disiscrizione Newsletter:</strong> Puoi disivertirti dalla newsletter in qualsiasi momento</li>
            </ul>
            <p className="text-foreground mt-4">
              Per esercitare questi diritti, contattaci all'indirizzo email fornito nella sezione contatti.
            </p>
          </section>

          {/* Cookie */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">
              6. Cookie e Tracciamento
            </h2>
            <p className="text-foreground mb-4">
              Utilizziamo cookie e strumenti di analytics per:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
              <li>Migliorare l'esperienza di navigazione</li>
              <li>Analizzare il comportamento degli utenti (tramite Umami Analytics)</li>
              <li>Ricordare le tue preferenze</li>
            </ul>
            <p className="text-foreground mt-4">
              Puoi disabilitare i cookie dalle impostazioni del tuo browser. Umami Analytics non raccoglie dati personali identificabili.
            </p>
          </section>

          {/* Conservazione Dati */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">
              7. Conservazione dei Dati
            </h2>
            <p className="text-foreground">
              I tuoi dati personali saranno conservati solo per il tempo necessario a raggiungere le finalità indicate. In particolare:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground ml-4 mt-4">
              <li><strong>Dati Contatti:</strong> Conservati per 1 anno o fino alla risoluzione della richiesta</li>
              <li><strong>Newsletter:</strong> Conservati fino alla disiscrizione</li>
              <li><strong>Dati Analytics:</strong> Conservati secondo le politiche di Umami Analytics</li>
            </ul>
            <p className="text-foreground mt-4">
              Dopo il periodo di conservazione, i dati saranno eliminati in modo permanente e sicuro.
            </p>
          </section>

          {/* Contatti */}
          <section className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              8. Contattaci per Questioni di Privacy
            </h2>
            <p className="text-foreground mb-4">
              Se hai domande sulla nostra Privacy Policy o desideri esercitare i tuoi diritti GDPR:
            </p>
            <div className="bg-white p-4 rounded border border-yellow-300">
              <p className="text-foreground mb-2">
                <strong>Email:</strong> privacy@cartastudenti.it
              </p>
              <p className="text-foreground mb-2">
                <strong>Indirizzo:</strong> Carta Studenti, Via Principale 123, 00100 Roma, Italia
              </p>
              <p className="text-foreground">
                <strong>Telefono:</strong> +39 06 1234 5678
              </p>
            </div>
            <p className="text-foreground mt-4">
              Risponderemo a tutte le richieste entro 30 giorni come previsto dal GDPR.
            </p>
          </section>

          {/* Modifiche */}
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-3">
              9. Modifiche a Questa Privacy Policy
            </h2>
            <p className="text-foreground">
              Ci riserviamo il diritto di aggiornare questa Privacy Policy in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con la data di aggiornamento. Ti consigliamo di controllare regolarmente questa pagina per rimanere informato su come proteggiamo i tuoi dati.
            </p>
          </section>

          {/* Conformità */}
          <section className="bg-purple-50 p-6 rounded-lg border border-purple-200">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              10. Conformità Legale
            </h2>
            <p className="text-foreground mb-4">
              Questa Privacy Policy è conforme a:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground ml-4">
              <li><strong>GDPR</strong> (Regolamento Generale sulla Protezione dei Dati - UE 2016/679)</li>
              <li><strong>CCPA</strong> (California Consumer Privacy Act)</li>
              <li><strong>Codice della Privacy Italiano</strong> (D.Lgs. 196/2003)</li>
              <li><strong>Direttiva ePrivacy</strong> (2002/58/CE)</li>
            </ul>
          </section>

          {/* Accettazione */}
          <section className="mt-8 p-6 bg-gray-100 rounded-lg">
            <p className="text-foreground text-sm">
              Utilizzando il nostro sito web e fornendo i tuoi dati personali, accetti i termini di questa Privacy Policy. Se non sei d'accordo con questa policy, ti invitiamo a non utilizzare il nostro sito.
            </p>
          </section>
        </div>

        {/* Pulsante Torna Home */}
        <div className="mt-8 mb-8">
          <Link href="/">
            <Button className="w-full bg-primary hover:bg-primary/90 text-white py-3 text-base font-semibold">
              Torna alla Home
            </Button>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
