const useAnimationScroll = () => {
  const animationsBannerSection = [
    {
      id: "title-banner-section",
      from: { opacity: 0, y: 80 },
      to: { opacity: 1, duration: 0.7, y: 0 },
    },
    {
      id: "subtitle-banner-section",
      from: { opacity: 0, y: 70 },
      to: { opacity: 1, duration: 0.7, y: 0 },
    },
    {
      id: "button-banner-section",
      from: { opacity: 0, y: 60 },
      to: { opacity: 1, duration: 0.7, y: 0 },
    },
  ]
  const animationsAboutSection = [
    {
      id: "image-about-section",
      from: { opacity: 0, y: 60 },
      to: { opacity: 1, duration: 0.7, y: 0 },
    },
    {
      id: "title-about-section",
      from: { opacity: 0, y: 30 },
      to: { opacity: 1, duration: 0.7, y: 0 },
    },
    {
      id: "subtitle-about-section",
      from: { opacity: 0, y: 30 },
      to: { opacity: 1, duration: 0.7, y: 0 },
    },
    {
      id: "paragraph1-about-section",
      from: { opacity: 0, y: 30 },
      to: { opacity: 1, duration: 0.7, y: 0 },
    },
    {
      id: "paragraph2-about-section",
      from: { opacity: 0, y: 30 },
      to: { opacity: 1, duration: 0.7, y: 0 },
    },
    {
      id: "icons-about-section",
      from: { opacity: 0, y: 30 },
      to: { opacity: 1, duration: 0.7, y: 0 },
    },
  ]

  const animationsServicesSection = [
    {
      id: "title-services-section",
      from: { opacity: 0, y: 30 },
      to: { opacity: 1, duration: 0.7, y: 0 },
    },
    {
      id: "subtitle-services-section",
      from: { opacity: 0, y: 30 },
      to: { opacity: 1, duration: 0.7, y: 0 },
    },
    {
      id: "card1-services-section",
      from: { opacity: 0, x: -50 },
      to: { opacity: 1, duration: 0.7, x: 0 },
    },
    {
      id: "card2-services-section",
      from: { opacity: 0, x: -50 },
      to: { opacity: 1, duration: 0.7, x: 0 },
    },
    {
      id: "card3-services-section",
      from: { opacity: 0, x: -50 },
      to: { opacity: 1, duration: 1, x: 0 },
    },
  ]
  const animationsProjectsSection = [
    {
      id: "title-projects-section",
      from: { opacity: 0, y: 30 },
      to: { opacity: 1, duration: 0.7, y: 0 },
    },
    {
      id: "subtitle-projects-section",
      from: { opacity: 0, y: 30 },
      to: { opacity: 1, duration: 0.7, y: 0 },
    },
    {
      id: "button-projects-section",
      from: { opacity: 0, y: 30 },
      to: { opacity: 1, duration: 0.7, y: 0, delay: 0.5 },
    },
  ]
  const animationsContactBlogSection = [
    {
      id: "card1-contact-blog-section",
      from: { opacity: 0, x: -50 },
      to: { opacity: 1, duration: 0.7, x: 0 },
    },
    {
      id: "card2-contact-blog-section",
      from: { opacity: 0, x: -50 },
      to: { opacity: 1, duration: 0.7, x: 0 },
    },
  ]
  const animationsFaqSection = [
    {
      id: "title-faq-section",
      from: { opacity: 0, y: 30 },
      to: { opacity: 1, duration: 0.7, y: 0 },
    },
    {
      id: "subtitle-faq-section",
      from: { opacity: 0, y: 30 },
      to: { opacity: 1, duration: 0.7, y: 0 },
    },
  ]
  const animationsProjects = [
    {
      id: "title-projects",
      from: { opacity: 0, y: 50 },
      to: { opacity: 1, duration: 0.7, y: 0 },
    },
    {
      id: "subtitle-projects",
      from: { opacity: 0, y: 40 },
      to: { opacity: 1, duration: 0.7, y: 0 },
    },
  ]
  const animationsContact = [
    {
      id: "title-contact",
      from: { opacity: 0, y: 50 },
      to: { opacity: 1, duration: 0.7, y: 0 },
    },
    {
      id: "subtitle-contact",
      from: { opacity: 0, y: 40 },
      to: { opacity: 1, duration: 0.7, y: 0 },
    },
  ]
  const animationsBlog = [
    {
      id: "title-blog",
      from: { opacity: 0, y: 50 },
      to: { opacity: 1, duration: 0.7, y: 0 },
    },
    {
      id: "subtitle-blog",
      from: { opacity: 0, y: 40 },
      to: { opacity: 1, duration: 0.7, y: 0 },
    },
  ]

  return {
    animationsBannerSection,
    animationsAboutSection,
    animationsServicesSection,
    animationsProjectsSection,
    animationsContactBlogSection,
    animationsFaqSection,
    animationsProjects,
    animationsContact,
    animationsBlog,
  }
}

export default useAnimationScroll
