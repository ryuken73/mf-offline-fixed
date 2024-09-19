import './App.css'
import React from 'react'
import SomeComponent from 'app_offline/Button';

// below works with Suspense Coponent(Shows fallback message) 
// const SomeComponent = React.lazy(() => import('app_offline/Button'))

export const App = () => {
  return (
    <div>
    <h1>mf offline test</h1>
      <React.Suspense fallback="loading">
        <SomeComponent></SomeComponent>
      </React.Suspense>
    </div>

  )

}