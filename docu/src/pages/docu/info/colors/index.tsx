import { GLOBAL_TRANSLATIONS } from '@/root/src/_constants/main'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '../../../../../next-i18next.config'
import React from 'react'

const Colors = () => <>Colors</>

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['docu_colors', ...GLOBAL_TRANSLATIONS], nextI18NextConfig)),
  },
})

export default Colors
