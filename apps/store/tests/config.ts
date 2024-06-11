type TestConfig = {
  title: string
  mercadoPagoTitle: string
}

export const getConfigForEnv = (url: string): TestConfig => {
  const config: Record<string, TestConfig> = {
    'https://exabeauty.com.ar/': {
      title: 'eXa Beauty Store',
      mercadoPagoTitle: 'eXa Beauty Solutions'
    },
    'https://gonzaloalonso.exapro.com.ar/': {
      title: 'Gonzalo Alonso',
      mercadoPagoTitle: 'Gonzalo Alonso'
    }
  }

  return config[url] ?? config['https://exabeauty.com.ar/']!
}
