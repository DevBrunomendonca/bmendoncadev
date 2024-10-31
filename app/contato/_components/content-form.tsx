"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { z } from "zod"
import Image from "next/image"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../_components/ui/form"
import { Button } from "../../_components/ui/button"
import { Input } from "../../_components/ui/input"
import { Textarea } from "../../_components/ui/textarea"
import { ArrowUpRight } from "lucide-react"

import FourthTitle from "../../_components/ui/fourth-title"
import ThhirdTitle from "../../_components/ui/third-title"
import LinkContact from "./link-contact"
import { IconSocialMedia, ListIcons } from "@/app/_components/list-icons"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Nome é um campo obrigatório.",
  }),
  email: z.string().min(2, {
    message: "Email é um campo obrigatório ",
  }),
  telephone: z.string().min(11, {
    message: "Telefone é um campo obrigatório.",
  }),
  message: z.string(),
})

const ContentFormContact = () => {
  const handleSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data)
  }
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      telephone: "",
      message: "",
    },
  })
  return (
    <div className="flex flex-col items-center gap-10 rounded-lg bg-primary-white p-5 md:flex-row md:items-start md:p-10">
      <div className="relative flex w-full justify-center md:w-2/5">
        <Image
          src="/imagem-iluastrativa-1.svg"
          alt="Imagem ilustrativa"
          width={341}
          height={432}
        />
        <Image
          src="/imagem-iluastrativa-2.svg"
          alt="Imagem ilustrativa"
          width={167}
          height={177}
          className="absolute left-[50%] top-0"
        />
        <Image
          src="/imagem-iluastrativa-3.svg"
          alt="Imagem ilustrativa"
          width={107}
          height={97}
          className="absolute left-[50%] top-[10%] z-10 animate-[animationOne_infinite_ease-in-out_2s]"
        />
        <Image
          src="/imagem-iluastrativa-4.svg"
          alt="Imagem ilustrativa"
          width={81}
          height={72}
          className="absolute left-[70%] top-[20%] animate-[animationOne_infinite_ease-in-out_1.8s]"
        />
      </div>
      <div className="w-full space-y-5 md:w-3/5 md:space-y-10">
        <ThhirdTitle
          className="text-primary-blue"
          content="Envie uma mensagem e me conte mais sobre como posso colaborar com seu projeto."
        />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(handleSubmit)}
            className="space-y-5"
          >
            <div className="flex flex-col gap-5 md:flex-row">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="space-y-0.5">
                    <FormLabel>
                      <FourthTitle content="Nome" />
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="placeholder:text-text-secondary-black resize-none text-base text-secondary-black text-opacity-75 placeholder:text-opacity-30 focus-visible:border-third-blue"
                        placeholder="Digite seu Nome..."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="space-y-0.5">
                    <FormLabel>
                      <FourthTitle content="Email" />
                    </FormLabel>
                    <FormControl>
                      <Input
                        className="placeholder:text-text-secondary-black resize-none text-base text-secondary-black text-opacity-75 placeholder:text-opacity-30 focus-visible:border-third-blue"
                        placeholder="Digite seu Email.."
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="telephone"
              render={({ field }) => (
                <FormItem className="space-y-0.5">
                  <FormLabel>
                    <FourthTitle content="Telefone" />
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="placeholder:text-text-secondary-black resize-none text-base text-secondary-black text-opacity-75 placeholder:text-opacity-30 focus-visible:border-third-blue"
                      placeholder="Digite seu Número de telefone.."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="space-y-0.5">
                  <FormLabel>
                    <FourthTitle content="Mensagem" />
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      className="placeholder:text-text-secondary-black resize-none text-base text-secondary-black text-opacity-75 placeholder:text-opacity-30 focus-visible:border-third-blue"
                      placeholder="Digite sua Mensagem..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="group/edit w-full bg-secondary-blue hover:bg-third-blue"
              type="submit"
            >
              Enviar Mensagem
              <ArrowUpRight className="transition-all duration-300 group-hover/edit:-translate-y-1 group-hover/edit:translate-x-1" />
            </Button>
          </form>
        </Form>
        <div className="flex w-full flex-col items-start justify-center gap-6 lg:flex-row">
          <div className="flex flex-col gap-3">
            <LinkContact
              classNameImg="w-5"
              srcImage="/icons/icone-telefone.svg"
              content="(62) 99254-4864"
              href="tel:62992544864"
            />
            <LinkContact
              classNameImg="w-5"
              srcImage="/icons/icone-wtpp.svg"
              content="(62) 99254-4864"
              href="https://wa.link/n2kytx"
            />
            <LinkContact
              classNameImg="w-[26px]"
              srcImage="/icons/icone-email.svg"
              content="devbrunomendonca@gmail.com"
              href="mailto:devbrunomendonca@gmail.com"
            />
          </div>
          <div className="space-y-2">
            <ThhirdTitle
              className="!text-base text-primary-blue"
              content="Me acompanhe nas redes sociais"
            />
            <ListIcons className="flex h-6 items-center gap-3">
              <IconSocialMedia
                href="https://www.instagram.com/brunmendonca_/"
                srcIcon="/icons/icone-insta.svg"
                altIcon="Icone Instagra"
              />
              <IconSocialMedia
                href="https://www.linkedin.com/in/devbrunomendonca/"
                srcIcon="/icons/icone-linkdin.svg"
                altIcon="Icone LinkdIn"
              />
              <IconSocialMedia
                href="https://github.com/DevBrunomendonca"
                srcIcon="/icons/icone-github.svg"
                altIcon="Icone Github"
              />
            </ListIcons>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentFormContact
