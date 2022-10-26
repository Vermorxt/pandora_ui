import nextI18nextConfig from '@/root/next-i18next.config'
import { Ui_Avatar_Docu } from '@/root/src/components-docu/content/avatar'
import { GLOBAL_TRANSLATIONS } from '@/root/src/_constants/main'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Avatar = () => <Ui_Avatar_Docu />

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['docu_avatar', ...GLOBAL_TRANSLATIONS], nextI18nextConfig)),
  },
})

export default Avatar
