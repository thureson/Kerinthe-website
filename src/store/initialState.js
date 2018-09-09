import App from '../components/app/App'
import Header from '../components/header/Header'
import Content from '../components/content/Content'
import Footer from '../components/footer/Footer'
import Introduction from '../components/blocks/introduction/Introduction'
import About from '../components/blocks/about/About'
import Technologies from '../components/blocks/technologies/Technologies';
import Image from '../components/blocks/image/Image';
import Section from '../components/section/Section';
import Contact from '../components/blocks/contact/Contact';

export default {
  app: {
    element: App,
    props: [['data', 'people', 1, 'name']],
    children: [
      {
        element: Header,
        props: [],
        children: []
      },
      {
        element: Content,
        props: [['data', 'people', 0, 'name']],
        children: [
          {
            element: Section,
            props: [],
            children: [
              {
                element: Introduction,
                props: [],
                children: []
              },
              {
                element: Image,
                props: [],
                children: []
              },
              {
                element: Introduction,
                props: [],
                children: []
              }
            ]
          },
          {
            element: Section,
            props: [],
            children: [
              {
                element: About,
                props: [],
                children: []
              },
              {
                element: Technologies,
                props: [],
                children: []
              },
              {
                element: Image,
                props: [],
                children: []
              },
              {
                element: Introduction,
                props: [],
                children: []
              }
            ]
          }
        ]
      },
      {
        element: Footer,
        props: [],
        children: [
          {
            element: Contact,
            props: [],
            children: []
          }
        ]
      }
    ]
  },
  data: {
    people: [
      { name: 'Tom' },
      { name: 'Upu' }
    ]
  }
}