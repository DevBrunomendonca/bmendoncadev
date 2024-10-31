import FourthTitle from "../_components/ui/fourth-title"
import Title from "../_components/ui/title"
import ContentFormContact from "./_components/content-form"

const ContactPage = () => {
  return (
    <section className="mx-auto min-h-[1200px] max-w-6xl space-y-10 px-4 pb-10 pt-32 md:space-y-14 md:pb-16">
      <div className="flex h-full flex-col items-center gap-2 md:gap-3">
        <Title className="!text-3xl md:!text-5xl" content="Entre em Contato" />
        <FourthTitle
          className="!text-center"
          content="Vamos discutir como posso ajudar em seu próximo projeto."
        />
      </div>
      <ContentFormContact />
    </section>
  )
}

export default ContactPage
