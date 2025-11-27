import Layout from '../components/layout/Layout';
import { Contact19 } from '../components/contact19';
import { Process3 } from '../components/process3';
import SEO from '../components/common/SEO';

const ContactPage = () => {
  return (
    <Layout>
      <SEO
        title="Kontakt"
        description="Buche jetzt dein Shooting! Unverbindliches Erstgespräch vereinbaren. Hochzeits-, Paar-, Portrait- und Familienshootings in München und Umgebung. Ich freue mich auf deine Nachricht!"
      />
      {/* Contact Form with Image Layout */}
      <Contact19 />

      {/* Process Steps */}
      <Process3 />
    </Layout>
  );
};

export default ContactPage;
