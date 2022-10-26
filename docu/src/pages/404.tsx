import nextI18nextConfig from '@/root/next-i18next.config'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GLOBAL_TRANSLATIONS } from '../_constants/main'

const App404 = () => <>404</>

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['translate_404', ...GLOBAL_TRANSLATIONS], nextI18nextConfig)),
  },
})

export default App404
