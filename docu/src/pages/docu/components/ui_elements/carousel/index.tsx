import nextI18nextConfig from '@/root/next-i18next.config'
import { Ui_Docu_Carousel } from '@/root/src/components-docu/content/carousel'
import { GLOBAL_TRANSLATIONS } from '@/root/src/_constants/main'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

const Carousel = () => <Ui_Docu_Carousel />

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['docu_carousel', ...GLOBAL_TRANSLATIONS], nextI18nextConfig)),
  },
})

export default Carousel
