import Main from '../src/components/Main'

// NEXTJS ISR STARTER - HOLDS CACHE FOR 24HRS
export const revalidate = 86400; // 24 hours ✅

export default function Home() {
  return (
    <>
      <Main />
    </>
  );
}
