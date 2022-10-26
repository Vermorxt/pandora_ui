import nextI18nextConfig from '@/root/next-i18next.config'
import { Ui_Docu_Tooltip } from '@/root/src/components-docu/content/tooltip'
import { GLOBAL_TRANSLATIONS } from '@/root/src/_constants/main'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

const Tooltip = () => <Ui_Docu_Tooltip />

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['docu_tooltip', ...GLOBAL_TRANSLATIONS], nextI18nextConfig)),
  },
})

export default Tooltip
