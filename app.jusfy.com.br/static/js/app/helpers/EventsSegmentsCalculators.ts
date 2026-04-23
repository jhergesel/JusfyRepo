export const NAME_CALCULATORS = new Map([
  ["revisional", "review"],
  ["trabalhista", "labor"],
  ["calculo_facil", "correction_simple"],
  ["calculo_completo", "correction_complete"],
  ["fgts", "fgts"],
  ["pensao", "childcare"],
  ["aluguel", "rent"],
  ["superendividamento", "overdebt"],
  ["rmc", "rmc"],
  ["pasep", "pasep"],
  ["progression_regime", "progression_crime"],
  ["penalty_crime", "penalty_crime"],
  ["inss", "inss"],
  ["divorce_calc", "divorce_calc"],
]);

const EventsSegmentCalculators = type => {
  window.analytics.track("New Calculation Created", {
    type: JSON.stringify(NAME_CALCULATORS.get(type)),
  });
};

const EventsSegment = () => {
  const EventDownloadedSegment = (name = "", values:{type?:string} = {}) => {
    window.analytics.track(name, {
      report_type: values?.type,
    });
  };
  const EventFeedbackSegment = name => {
    window.analytics.track(name);
  };
  const EventTutorialSegment = name => {
    window.analytics.track(name);
  };
  const EventCalculationGenerated = (name, values) => {
    window.analytics.track(name, values);
  };

  const LimitReachModal = (name, values) => {
    window.analytics.track(name, values);
  };

  const HandleEvent = (name, values = {}) => {
    window.analytics.track(name, values);
  };

  return {
    EventDownloadedSegment,
    EventFeedbackSegment,
    EventTutorialSegment,
    EventCalculationGenerated,
    LimitReachModal,
    HandleEvent,
  };
};

export { EventsSegmentCalculators, EventsSegment };
