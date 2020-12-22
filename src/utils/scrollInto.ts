const scrollInto = (id: string): void => {
  const yOffset = -67; // header height
  const element = document.getElementById(id);

  if (element) {
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
    // element.scrollIntoView({ inline: 'start', block: 'start', behavior: 'smooth' });
  }
};

export default scrollInto;
