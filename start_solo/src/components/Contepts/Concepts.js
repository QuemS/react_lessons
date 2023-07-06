

import './Concepts.css'
import ConteptItem from './ConceptItem';
import concepts from '../../data/conteptsData';


function Concepts() {

  return (
    <ul id="concepts">
      <ConteptItem title={concepts[0].title} image={concepts[0].image} description={concepts[0].description} />
      <ConteptItem title={concepts[1].title} image={concepts[1].image} description={concepts[1].description} />
      <ConteptItem title={concepts[2].title} image={concepts[2].image} description={concepts[2].description} />
    </ul>
  )
}
export default Concepts