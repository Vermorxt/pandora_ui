import nextI18nextConfig from '@/root/next-i18next.config'
import { Docu_Spinner } from '@/root/src/components-docu/content/spinner'
import { GLOBAL_TRANSLATIONS } from '@/root/src/_constants/main'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Spinner = () => <Docu_Spinner />

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['docu_spinner', ...GLOBAL_TRANSLATIONS], nextI18nextConfig)),
  },
})

export default Spinner
