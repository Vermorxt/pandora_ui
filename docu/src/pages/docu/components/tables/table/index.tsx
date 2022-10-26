import nextI18nextConfig from '@/root/next-i18next.config'
import { Ui_Docu_Table } from '@/root/src/components-docu/content/table'
import { GLOBAL_TRANSLATIONS } from '@/root/src/_constants/main'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Table = () => <Ui_Docu_Table />

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['docu_table', ...GLOBAL_TRANSLATIONS], nextI18nextConfig)),
  },
})

export default Table
