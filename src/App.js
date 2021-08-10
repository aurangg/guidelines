import SectionPadding90 from './Components/SectionPadding90';
import SectionPadding60 from './Components/SectionPadding60';
import H1heading from './Components/H1heading';
import H1Bold from './Components/H1Bold';
import H2heading from './Components/H2heading';
import H3 from './Components/H3';
import H4 from './Components/H4';
import H5 from './Components/H5';
import H6 from './Components/H6';
import Paragraph from './Components/Paragraph';
import MainAlign from './Components/AlignText/MainAlign';
import SectionTitle from './Components/SectionTitle/SectionTitle';
import SpanColor from './Components/SpanColor/SpanColor';
import InputStyles from './Components/Input/InputStyles';
import Height from './Components/Height/Height';
import Flex from './Components/Flex/Flex';
import Buttons from './Components/Buttons/Buttons';
function App() {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="sp-90">
              <h1 className="text-left">
                Development Guidelines
              </h1>
            </div>
          </div>
          <SectionPadding90 />
          <SectionPadding60 />
          <H1heading />
          <H1Bold />
          <H2heading />
          <H3 />
          <H4 />
          <H5 />
          <H6 />
          <Paragraph />
          <SectionTitle textName="Left - Text Align" />
          <MainAlign classNameProp="text-left" />
          <SectionTitle textName="Right - Text Align" />
          <MainAlign classNameProp="text-right" />
          <SectionTitle textName="Center - Text Align" />
          <MainAlign classNameProp="text-center" />
          <SectionTitle textName="Span Color" />
          <SpanColor />
        </div> 
      </div>
      <div className="container">
        <div className="row">
          <SectionTitle textName="Input Buttons" />
        </div>
      </div>
      <InputStyles />
      <div className="container">
        <div className="row">
          <SectionTitle textName="Heights" />
          <Height />

          <SectionTitle textName="Flex" />
          <Flex />

          <SectionTitle textName="Buttons" />
          <Buttons />

        </div>
      </div>
    </section>
  );
}

export default App;
