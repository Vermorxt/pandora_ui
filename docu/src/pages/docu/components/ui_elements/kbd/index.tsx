import nextI18nextConfig from '@/root/next-i18next.config'
import { Ui_Docu_Kbd } from '@/root/src/components-docu/content/kbd'
import { GLOBAL_TRANSLATIONS } from '@/root/src/_constants/main'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

const Kbd = () => <Ui_Docu_Kbd />

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['docu_kbd', ...GLOBAL_TRANSLATIONS], nextI18nextConfig)),
  },
})

export default Kbd
