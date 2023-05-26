export const theme = {
  plain: { color: 'var(--grey-00)', backgroundColor: 'var(--grey-90)' },
  styles: [
    {
      types: ['constant'],
      style: { color: 'rgb(189, 147, 249)' },
    },
    {
      types: ['punctuation', 'symbol'],
      style: { color: 'rgb(248, 248, 242)' },
    },
    {
      types: [
        'char',
        'tag',
        'selector',
        'class-name',
        'function',
        'control-flow',
      ],
      style: { color: '#fc538f' },
    },
    {
      types: ['keyword', 'variable', 'property-access'],
      style: { color: '#a8b8d0' },
    },
    { types: ['comment'], style: { color: '#64748b' } },
  ],
};
