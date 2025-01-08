import Layouts from "@layouts/Layouts";

import PageBanner from "@components/PageBanner";

const Story = ( props ) => {
  return (
    <Layouts fullWidth
    >
      <PageBanner pageTitle={"Trajetória"} />
      
      {/* story */}
      <section>
          <div className="row">
              <div className="col-xl-6">

                  <div className="mil-section-title mil-up mil-left mil-mb-90">
                      <div className="mil-divider"></div>
                      <h3>Formação:</h3>
                  </div>

                  <div className="mil-timeline mil-mb-90">
                      <div className="mil-timeline-track"></div>
                      <ul>
                          <li className="mil-up">
                              <div className="mil-item-head mil-mb-5">
                                  <h4>Uni-FACEF - Centro Universitário Municipal de Franca</h4>
                                  <div className="mil-text-sm">2023 - 2026</div>
                              </div>
                              <p className="mil-text-sm mil-mb-15">Student</p>
                              <p>Bacharelado em Enganharia de Software.</p>
                          </li>
                          <li className="mil-up">
                              <div className="mil-item-head mil-mb-5">
                                  <h4>Cambridge University Press & Assessment</h4>
                                  <div className="mil-text-sm">2023</div>
                              </div>
                              <p className="mil-text-sm mil-mb-15">Student</p>
                              <p>First Certificate in English - FCE(B2).</p>
                          </li>
                          <li className="mil-up">
                              <div className="mil-item-head mil-mb-5">
                                  <h4>Colégio Alto Padrão Franca</h4>
                                  <div className="mil-text-sm">2020 - 2022</div>
                              </div>
                              <p className="mil-text-sm mil-mb-15">Student</p>
                              <p>Segundo Grau.</p>
                          </li>
                          <li className="mil-up">
                              <div className="mil-item-head mil-mb-5">
                                  <h4>Curso de Matemática do Professor Cebolinha</h4>
                                  <div className="mil-text-sm">2019 - 2022</div>
                              </div>
                              <p className="mil-text-sm mil-mb-15">Student</p>
                              <p>Quatro (4) anos de Curso de Matemática .</p>
                          </li>
                          <li className="mil-up">
                              <div className="mil-item-head mil-mb-5">
                                  <h4>Curso Expressão</h4>
                                  <div className="mil-text-sm">2018 - 2019</div>
                              </div>
                              <p className="mil-text-sm mil-mb-15">Student</p>
                              <p>Um (1) ano de Curso de Redação, Interpretação e Gramática.</p>
                          </li>
                          
                      </ul>
                  </div>

              </div>
              <div className="col-xl-6">

                  <div className="mil-section-title mil-up mil-left mil-mb-90">
                      <div className="mil-divider"></div>
                      <h3>Work:</h3>
                  </div>

                  <div className="mil-timeline mil-mb-90">
                      <div className="mil-timeline-track"></div>
                      <ul>
                      <li className="mil-up">
                              <div className="mil-item-head mil-mb-5">
                                  <h4>Professora Particular</h4>
                                  <div className="mil-text-sm">2023 - Atual</div>
                              </div>
                              <p className="mil-text-sm mil-mb-15">Teacher</p>
                              <p>Professora de Inglês e Informática.</p>
                          </li>
                          <li className="mil-up">
                              <div className="mil-item-head mil-mb-5">
                                  <h4>EuroAnglo</h4>
                                  <div className="mil-text-sm">2024 - Atual</div>
                              </div>
                              <p className="mil-text-sm mil-mb-15">Teacher</p>
                              <p>Professora de Inglês Kids e Informática.</p>
                          </li>
                          <li className="mil-up">
                              <div className="mil-item-head mil-mb-5">
                                  <h4>Pró-Criança</h4>
                                  <div className="mil-text-sm">2024 - Atual</div>
                              </div>
                              <p className="mil-text-sm mil-mb-15">Teacher</p>
                              <p>Professora de Informática - Uni-FACEF.</p>
                          </li>
                          <li className="mil-up">
                              <div className="mil-item-head mil-mb-5">
                                  <h4>Aliança América</h4>
                                  <div className="mil-text-sm">2023 - Atual</div>
                              </div>
                              <p className="mil-text-sm mil-mb-15">Student</p>
                              <p>Professora de Inglês.</p>
                          </li>    <li className="mil-up">
                              <div className="mil-item-head mil-mb-5">
                                  <h4>Uni-FACEF</h4>
                                  <div className="mil-text-sm">2024</div>
                              </div>
                              <p className="mil-text-sm mil-mb-15">Monitor</p>
                              <p>Monitora de Matemática Discreta.</p>
                          </li>
                          <li className="mil-up">
                              <div className="mil-item-head mil-mb-5">
                                  <h4>Uni-FACEF</h4>
                                  <div className="mil-text-sm">2024</div>
                              </div>
                              <p className="mil-text-sm mil-mb-15">Monitor</p>
                              <p>Monitora de Cálculo Integral e Diferencial.</p>
                          </li>
                      </ul>
                  </div>

              </div>
          </div>
      </section>
      {/* story end */}
    </Layouts>
  );
};
export default Story;