import nextI18nextConfig from '@/root/next-i18next.config'
import { Ui_Docu_Countdown } from '@/root/src/components-docu/content/countdown'
import { GLOBAL_TRANSLATIONS } from '@/root/src/_constants/main'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

const Countdown = () => <Ui_Docu_Countdown />

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['docu_countdown', ...GLOBAL_TRANSLATIONS], nextI18nextConfig)),
  },
})

export default Countdown
