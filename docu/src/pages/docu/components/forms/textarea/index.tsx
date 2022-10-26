import nextI18nextConfig from '@/root/next-i18next.config'
import { Ui_Docu_TextArea } from '@/root/src/components-docu/content/text-area'
import { GLOBAL_TRANSLATIONS } from '@/root/src/_constants/main'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Textarea = () => <Ui_Docu_TextArea />

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['docu_textarea', ...GLOBAL_TRANSLATIONS], nextI18nextConfig)),
  },
})

export default Textarea
