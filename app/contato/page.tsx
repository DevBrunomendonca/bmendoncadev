import ContentFormContact from "./_components/content-form"
import ContentTitleContact from "./_components/content-title"

const ContactPage = () => {
  return (
    <section className="mx-auto max-w-6xl space-y-10 px-4 pb-10 pt-32 md:space-y-14 md:pb-16">
      <ContentTitleContact />
      <ContentFormContact />
    </section>
  )
}

export default ContactPage
