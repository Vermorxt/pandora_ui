module.exports = {
  // mode: 'jit',
  content: ['./src/**/*.{js,ts,jsx,tsx}', './src/styles/safelist.txt'],
  // safelist: [{ pattern: /.*/ }],
  // NOTE: save all css classes that are generated dynamically and not able to find by parser/jit
  // safelist: [
  //   '.input-bordered',
  //   '.tooltip-right',
  //   '.tooltip-bottom',
  //   '.tooltip-left',
  //   '.tooltip-top',
  //   '.mask-parallelogram',
  //   '.mask-heart',
  //   '.mask-hexagon-2',
  //   '.mask-parallelogram-1',
  //   '.mask-parallelogram-2',
  //   '.mask-parallelogram-3',
  //   '.mask-parallelogram-4',
  //   '.mask-star',
  //   '.mask-star-2',
  //   '.mask-triangle-2',
  //   '.mask-triangle-3',
  //   '.mask-triangle-4',
  //   '.carousel-vertical',
  //   {
  //     pattern:
  //       /.btn*|.warn*|.accent*|.primary*|.secondary*|.ghost*|.info*|.warning*|.success*|.text*|.error*|.link*|.input*|.check*|.radio*|.wide*|.dropdown*|.w-*|.lg|.md|.sm|.xs|.xxs|.block/,
  //   },
  // ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss'),
    require('daisyui'),
    require('precss'),
    require('autoprefixer'),
    require('tailwind-safelist-generator')({
      path: './src/styles/safelist.txt',
      patterns: [
        'w-{width}',
        'h-{height}',
        'text-{colors}',
        'text-{size}',
        'rounded-{size}',
        'radio-{colors}',
        'radio-{colors}:checked',
        'btn-{colors}',
        'bg-{colors}',
        'bg-{colors}-focus',
        'text-{colors}-content',
        'text-{size}',
        'border-{borderWidth}',
        'rounded-{screens}',
        '{screens}:gap-{gap}',
        'alert-{colors}',
        'glass',
        'group-focus:bg-{colors}',
        'group-focus:text-{colors}-content',
        'peer-checked:bg-{colors}',
        'peer-checked:text-{colors}-content',
      ],
    }),
  ],
  daisyui: {
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
    ],
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
}
