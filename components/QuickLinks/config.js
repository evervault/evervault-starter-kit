import {
  ArrowLeftRight,
  ArrowRightLeft,
  Code,
  TextCursorInput,
} from 'lucide-react';

export const links = [
  {
    title: 'Encrypt Data',
    children: [
      {
        icon: <ArrowLeftRight width={16} />,
        title: 'Inbound Relay',
        description:
          'An encryption proxy which automatically intercepts and encrypts selected sensitive fields before they touch your server.',
        href: '/inbound-relay',
      },
      {
        icon: <Code width={16} />,
        title: 'SDKs',
        description:
          'Language-specific tools for performing encryption operations and workflows from your code.',
        href: '/sdks',
      },
      {
        icon: <TextCursorInput width={16} />,
        title: 'Inputs',
        description:
          'Embeddable forms which minimise your compliance burden by allowing you to collect and encrypt cardholder data.',
        href: '/inputs',
      },
    ],
  },
  {
    title: 'Use Encrypted Data',
    children: [
      {
        icon: <ArrowRightLeft width={16} />,
        title: 'Outbound Relay',
        description:
          'A decryption proxy that allows you to share Evervault-encrypted data from your server to third-party APIs.',
        href: '/outbound-relay',
      },
      {
        icon: <Code width={16} />,
        title: 'Functions',
        description:
          'Secure serverless functions that allow you to run workflows, logic and processing on encrypted data.',
        href: '/functions',
      },
    ],
  },
];
