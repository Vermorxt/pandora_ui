import nextI18nextConfig from '@/root/next-i18next.config'
import { Ui_Docu_RadialProgress } from '@/root/src/components-docu/content/radial-progress'
import { GLOBAL_TRANSLATIONS } from '@/root/src/_constants/main'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

const RadialProgress = () => <Ui_Docu_RadialProgress />

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['docu_radial_progress', ...GLOBAL_TRANSLATIONS], nextI18nextConfig)),
  },
})

export default RadialProgress
