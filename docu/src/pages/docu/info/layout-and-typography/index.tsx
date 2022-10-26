import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import nextI18NextConfig from '../../../../../next-i18next.config'
import { GLOBAL_TRANSLATIONS } from '../../../../_constants/main'
import React from 'react'

const LayoutAndTypography = () => <>LayoutAndTypography</>

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['docu_layoutAndTypography', ...GLOBAL_TRANSLATIONS], nextI18NextConfig)),
  },
})

export default LayoutAndTypography
