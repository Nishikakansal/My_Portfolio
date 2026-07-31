# Certificate Images

Place your certificate images here (JPG, PNG, or WebP).

Then update `components/Certifications.tsx` — find the `certifications` array and set the `image` field:

```ts
{
  id: 1,
  title: 'React – The Complete Guide',
  issuer: 'Udemy',
  date: 'Dec 2024',
  credentialId: 'UC-XXXXXXXX',
  image: '/certifications/react-udemy.jpg',
  link: 'https://udemy.com/certificate/...',
  color: 'from-cyan-400 to-blue-500',
  badge: 'Web Dev'
}
```

Supported formats: `.jpg`, `.jpeg`, `.png`, `.webp`
