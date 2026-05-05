import React from 'react';
import Chapter, { GenericChapterProps } from '../../components/helper/Chapter';
import Code from '../../components/helper/Code';
import Slide from '../../components/reveal/Slide';

const monolithicApp = `// Traditional monolithic React app
src/
  components/
    Header/
    ProductList/
    ShoppingCart/
    UserProfile/
  App.tsx
  main.tsx
`;

const microfrontendStructure = `// Microfrontend architecture
apps/
  shell/           # Main orchestrator
  product-catalog/ # Independent team A
  shopping-cart/   # Independent team B
  user-profile/    # Independent team C
`;

const viteConfig = `// vite.config.ts - Shell App
import { defineConfig } from 'vite';
import { federation } from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    federation({
      name: 'shell',
      remotes: {
        productApp: 'http://localhost:4001/assets/remoteEntry.js',
        cartApp: 'http://localhost:4002/assets/remoteEntry.js'
      },
      shared: ['react', 'react-dom']
    })
  ]
});
`;

const remoteConfig = `// vite.config.ts - Product Catalog App
import { defineConfig } from 'vite';
import { federation } from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    federation({
      name: 'productApp',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductList': './src/ProductList.tsx'
      },
      shared: ['react', 'react-dom']
    })
  ]
});
`;

const lazyLoading = `// Shell App - Lazy loading microfrontends
import { lazy, Suspense } from 'react';

const ProductList = lazy(() => import('productApp/ProductList'));
const ShoppingCart = lazy(() => import('cartApp/ShoppingCart'));

function App() {
  return (
    <div>
      <h1>E-Commerce Platform</h1>
      <Suspense fallback={<div>Loading products...</div>}>
        <ProductList />
      </Suspense>
      <Suspense fallback={<div>Loading cart...</div>}>
        <ShoppingCart />
      </Suspense>
    </div>
  );
}
`;

const sharedDependencies = `// Shared dependencies configuration
{
  shared: {
    'react': { singleton: true },
    'react-dom': { singleton: true },
    'lodash': { singleton: false },
    '@company/design-system': { singleton: true }
  }
}
`;

const MicrofrontendsChapter: React.FC<GenericChapterProps> = (props: GenericChapterProps) => {
  return (
    <Chapter
      {...props}
      subtitle={
        <blockquote>
          &quot;Microfrontends enable teams to work independently on different parts of a frontend application while maintaining a unified user experience.&quot;
        </blockquote>
      }
    >
      <Slide>
        <img style={{ width: 800, margin: "auto" }} src='./slide-assets/microfrontends.jpg' />
      </Slide>

      <Slide>
        <h2>When to use?</h2>
        <ul className='fragment'>
          <li>Large teams working on different features</li>
          <li>Independent deployment cycles</li>
          <li>Technology diversity needs</li>
          <li>Organizational autonomy</li>
        </ul>
        <aside className='notes'>
          Microfrontends are great for scaling teams and enabling independent development cycles.
        </aside>
      </Slide>

      <Slide>
        <h2>🕵️ Be careful!</h2>
        <p className='fragment'>Increased complexity in development setup</p>
        <p className='fragment'>Runtime overhead from module federation</p>
        <p className='fragment'>Shared dependency version conflicts</p>
        <p className='fragment'>Only use for medium to large applications</p>
        <aside className='notes'>
          Don't over-engineer small applications. The complexity overhead might not be worth it.
        </aside>
      </Slide>

      <Slide>
        <h2>From Monolith</h2>
        <Code>{monolithicApp}</Code>
      </Slide>

      <Slide>
        <h2>To Microfrontends</h2>
        <Code>{microfrontendStructure}</Code>
      </Slide>

      <Slide>
        <h2>Vite Configuration - Shell</h2>
        <Code highlightedLines='6-11'>{viteConfig}</Code>
      </Slide>

      <Slide>
        <h2>Vite Configuration - Remote</h2>
        <Code highlightedLines='8-12'>{remoteConfig}</Code>
      </Slide>

      <Slide>
        <h2>Lazy Loading Components</h2>
        <Code highlightedLines='3-4|8-13'>{lazyLoading}</Code>
      </Slide>

      <Slide>
        <h2>Shared Dependencies</h2>
        <Code>{sharedDependencies}</Code>
        <aside className='notes'>
          Singleton ensures only one instance is loaded. Non-singleton allows multiple versions.
        </aside>
      </Slide>

      <Slide>
        <h2>Further Reads</h2>
        <ul>
          <li>
            <a href='https://vitejs.dev/guide/build.html#library-mode' target='_blank' rel='noreferrer'>
              Vite Module Federation
            </a>
          </li>
          <li>
            <a href='https://micro-frontends.org/' target='_blank' rel='noreferrer'>
              🚀 Microfrontends.org
            </a>
          </li>
          <li>
            <a href='https://martinfowler.com/articles/micro-frontends.html' target='_blank' rel='noreferrer'>
              🚀 Martin Fowler's Microfrontends
            </a>
          </li>
        </ul>
        <aside className='notes'>Great resources to dive deeper into microfrontend patterns and best practices.</aside>
      </Slide>
    </Chapter>
  );
};

export default MicrofrontendsChapter;
