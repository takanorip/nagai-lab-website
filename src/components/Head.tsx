import React from 'react';

const Head = ({ title ='大阪大学基礎工学研究科 長井研究室', description = '大阪大学基礎工学研究科、システム創成専攻/人工知能先端研究センター(AIX) 長井研究室のウェブサイトです。「ロボットはもっと賢くなる」をテーマに、ロボットの知能や人工知能に関する研究を行っています。' }) => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="description" property="og:description" content={description} />
      {/* <meta property="og:image" content="" /> */}
      <meta property="og:image:alt" content="大阪大学基礎工学研究科 長井研究室" />
      <meta name="viewport" content="width=device-width" />
      <title>{title}</title>
      <meta name="twitter:card" content="summary_large_image" />

      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Zen+Maru+Gothic:wght@400;700&display=swap" rel="stylesheet" />
    </>
  )
}

export default Head;