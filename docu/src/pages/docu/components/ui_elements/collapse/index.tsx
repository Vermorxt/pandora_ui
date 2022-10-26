import nextI18nextConfig from '@/root/next-i18next.config'
import { Ui_Docu_Collapse } from '@/root/src/components-docu/content/collapse'
import { GLOBAL_TRANSLATIONS } from '@/root/src/_constants/main'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

const Collapse = () => <Ui_Docu_Collapse />

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['docu_collapse', ...GLOBAL_TRANSLATIONS], nextI18nextConfig)),
  },
})

export default Collapse
