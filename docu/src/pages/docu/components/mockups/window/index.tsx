import nextI18nextConfig from '@/root/next-i18next.config'
import { Ui_Docu_MockupWindow } from '@/root/src/components-docu/content/mockup-window'
import { GLOBAL_TRANSLATIONS } from '@/root/src/_constants/main'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const WindowMockup = () => <Ui_Docu_MockupWindow />

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['docu_window', ...GLOBAL_TRANSLATIONS], nextI18nextConfig)),
  },
})

export default WindowMockup
