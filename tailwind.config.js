/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },

      backgroundImage: {
        'avatar': "url('./images/image-avatar.png')",
        'logo': "url('./images/logo.svg')",
        'cart-icon': "url('./images/icon-cart.svg')",
        'close-icon': "url('./images/icon-close.svg')",
        'delete-icon': "url('./images/icon-delete.svg')",
        'menu-icon': "url('./images/icon-menu.svg')",
        'minus-icon': "url('./images/icon-minus.svg')",
        'next-icon': "url('./images/icon-next.svg')",
        'plus-icon': "url('./images/icon-plus.svg')",
        'previous-icon': "url('./images/icon-previous.svg')",
        'product-1': "url('./images/image-product-1.jpg')",
        'product-2': "url('./images/image-product-2.jpg')",
        'product-3': "url('./images/image-product-3.jpg')",
        'product-4': "url('./images/image-product-4.jpg')",
        'thumbnail-product-1': "url('./images/image-product-1-thumbnail.jpg')",
        'thumbnail-product-2': "url('./images/image-product-2-thumbnail.jpg')",
        'thumbnail-product-3': "url('./images/image-product-3-thumbnail.jpg')",
        'thumbnail-product-4': "url('./images/image-product-4-thumbnail.jpg')",
      },

      colors: {
        'color-orange': 'hsl(26, 100%, 55%)',
        'color-pale-orange': 'hsl(25, 100%, 94%)',
        'color-dark-blue': 'hsl(220, 13%, 13%)',
        'color-dark-grayish-blue': 'hsl(219, 9%, 45%)',
        'color-grayish-blue': 'hsl(220, 14%, 75%)',
        'color-light-grayish-blue': 'hsl(223, 64%, 98%)',
        'color-white': 'hsl(0, 0%, 100%)',
        'color-black': 'hsl(0, 0%, 0%)',

      },
      animation: {
        'pulse-bg-once': 'pulse-bg-once 2s ease-in forwards',
      },  
      fontFamily: {
        KumbhSans: "'Kumbh Sans', sans-serif",

      },
      fontWeight: {
        regular: 400,
        bold: 700,
      },
      fontSize: {
        base: '16px',

      },
      minWidth: {
        'onehundred': '100%',
        'ninty': '90%',
        'eighty': '80%',
        'fifty': '50%',
        'forty': '40%',
        'thirtythree': ': 33.333333%',
      },
      maxWidth: {
        'onehundred': '100%',
        'ninty': '90%',
        'sixty': '60%',
        'forty': '40%',
        'eighty': '80%',
        'fifty': '50%',
        'fortyFive': '45%',
        'thirtythree': ': 33.333333%',
      },
      height: {
        'onehundred': '100%',
        'forty': '40%',
        'eighty': '80%',
        'fifty': '50%',
        'fortyFive': '45%',
      },
      width: {
        'onehundred': '100%',
        'nintyfive': '94%',
        'nintyfour': '94%',
        'nintythree': '93%',
        'ninty': '90%',
        'eighty': '80%',
        'fifty': '50%',
        'forty': '40%',
        'thirty': '30%',
      },
      top: {
        'ninty': '90%',
        'forty': '40%',
        'eighty': '80%',
        'fifty': '50%',
      },
      maxHeight: {
        'onehundred': '100%',
        'ninty': '90%',
        'sixty': '60%',
        'forty': '40%',
        'eighty': '80%',
        'fifty': '50%',
        'fortyFive': '45%',
        'thirtythree': ': 33.333333%',
      },
      minHeight: {
        'onehundred': '100%',
        'ninty': '90%',
        'sixty': '60%',
        'forty': '40%',
        'eighty': '80%',
        'fifty': '50%',
        'fortyFive': '45%',
        'thirtythree': ': 33.333333%',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}