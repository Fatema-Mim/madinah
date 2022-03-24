module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
      'color1': '#d51051',
      'color2': '#1d3922',
      'color3': '#999',
      'primary': '#91c765',
      'background': 'rgb(138, 196, 62)',
      'text': 'rgba(26,26,26,.6)',
      'text2': 'rgba(26,26,26,.9)',
      'text3': '#333333',
      'text4': '#666666',
      'text5': '#AAAAAA',
      'text6': '#1A1A1AB3',
      'button': '#95cd68',
      'button-bg': 'rgba(255, 255, 255, 0.1)',
      'button-bg1': 'rgba(255, 255, 255, 0.3)',
      'button-bg2': 'rgba(124, 123, 109, 0.140)',
      'overlay': 'rgba(22, 11, 11, 0.59)',
      'overlay2': 'rgba(255, 255, 255, 0.3)',
      'overlay3': 'linear-gradient(180deg,rgba(87,142,99,0.56) 0%,rgba(142,178,151,0.45) 100%)',
      'secondery': '#678D48',
      'footer': '#6c7187',
      'link':'rgba(0,0,0,0.6)',
      'instagram':'#ea2c59',
      },
      
      backgroundImage: {
        'aboutBanner': "url('/public/assets/image/aboutUs.jpg')",
      },
      fontSize: {
      'xl2': '1.375rem',
      },
      fontFamily: {
      'about': ['Aref Ruqaa','serif','Poppins','sans-serif'],
      },
    },
  },
  plugins: [
  require('tailwindcss-rtl'),
 ],
}
