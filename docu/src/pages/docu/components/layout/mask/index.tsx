import nextI18nextConfig from '@/root/next-i18next.config'
import { Ui_Docu_Mask } from '@/root/src/components-docu/content/mask'
import { GLOBAL_TRANSLATIONS } from '@/root/src/_constants/main'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Mask = () => <Ui_Docu_Mask />

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['docu_mask', ...GLOBAL_TRANSLATIONS], nextI18nextConfig)),
  },
})

export default Mask
