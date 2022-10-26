import nextI18nextConfig from '@/root/next-i18next.config'
import { Ui_Docu_Stat } from '@/root/src/components-docu/content/stat'
import { GLOBAL_TRANSLATIONS } from '@/root/src/_constants/main'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

const Stat = () => <Ui_Docu_Stat />

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['docu_stat', ...GLOBAL_TRANSLATIONS], nextI18nextConfig)),
  },
})

export default Stat
