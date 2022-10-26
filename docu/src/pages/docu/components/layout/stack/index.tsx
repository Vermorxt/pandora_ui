import nextI18nextConfig from '@/root/next-i18next.config'
import { Ui_Docu_Stack } from '@/root/src/components-docu/content/stack'
import { GLOBAL_TRANSLATIONS } from '@/root/src/_constants/main'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Stack = () => <Ui_Docu_Stack />

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['docu_stack', ...GLOBAL_TRANSLATIONS], nextI18nextConfig)),
  },
})

export default Stack
