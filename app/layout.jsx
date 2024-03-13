import '@styles/globals.css';

export const metadata = {
    title: 'Prompt Library',
    description: 'Discover and share prompts for writing, journaling, and more.',
    
}

const RootLayout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <div className='main'>
                <div className='gradient'/>
            </div>
            <main className='app'>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout;