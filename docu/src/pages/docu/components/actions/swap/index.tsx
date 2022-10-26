import nextI18nextConfig from '@/root/next-i18next.config'
import { Ui_Docu_Swap } from '@/root/src/components-docu/content/swap'
import { GLOBAL_TRANSLATIONS } from '@/root/src/_constants/main'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Swap = () => <Ui_Docu_Swap />

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['docu_swap', ...GLOBAL_TRANSLATIONS], nextI18nextConfig)),
  },
})

export default Swap
