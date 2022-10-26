import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '../../../../../next-i18next.config'
import { GLOBAL_TRANSLATIONS } from '../../../../_constants/main'
import React from 'react'

const Use = () => <>Use</>

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['docu_use', ...GLOBAL_TRANSLATIONS], nextI18NextConfig)),
  },
})

export default Use
