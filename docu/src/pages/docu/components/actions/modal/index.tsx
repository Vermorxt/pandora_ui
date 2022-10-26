import nextI18nextConfig from '@/root/next-i18next.config'
import { Ui_Docu_Modal } from '@/root/src/components-docu/content/modal'
import { GLOBAL_TRANSLATIONS } from '@/root/src/_constants/main'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Modal = () => <Ui_Docu_Modal />

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['docu_modal', ...GLOBAL_TRANSLATIONS], nextI18nextConfig)),
  },
})

export default Modal
