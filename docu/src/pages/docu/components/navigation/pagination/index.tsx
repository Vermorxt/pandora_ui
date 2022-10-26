import nextI18nextConfig from '@/root/next-i18next.config'
import { Ui_Docu_Pagination } from '@/root/src/components-docu/content/pagination'
import { GLOBAL_TRANSLATIONS } from '@/root/src/_constants/main'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Pagination = () => <Ui_Docu_Pagination />

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['docu_pagination', ...GLOBAL_TRANSLATIONS], nextI18nextConfig)),
  },
})

export default Pagination
