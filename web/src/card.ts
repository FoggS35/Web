
export const createCard = (titleCard: string, content: any) => {

  const main_div = document.createElement('div');
  const teg_h1 = document.createElement('h1')
  const teg_content = document.createElement('div')

  main_div.classList.add('main_block')
  teg_h1.classList.add('item__title')
  teg_content.classList.add('content__block')

  teg_h1.innerText = titleCard
  // teg_content.innerHTML = content
  teg_content.insertAdjacentElement('afterbegin', content)

  main_div.insertAdjacentElement('afterbegin', teg_h1)
  main_div.insertAdjacentElement('afterbegin', teg_content)

  return main_div;

}