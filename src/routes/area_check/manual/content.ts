import { type ManualSection } from "$lib";

export const contents: ManualSection[] = [
  {
    sectionName: "Introduction",
    content:
      "1. Introduction\n" +
      "\n" +
      "1.1 This user manual is a desktop guide for the Route Check. The tool is a ‘scheme\n" +
      "review’ tool used for assessing the design quality of linear street or path schemes.\n" +
      "This tool can be used in both urban and rural contexts. It is similar in style to the\n" +
      "‘Cycling Level of Service’^1 and ‘Healthy Streets Check for Designers’^2 tools released\n" +
      "by the Department for Transport (DfT) and Transport for London (TfL). This user\n" +
      "manual allows you to assess and score streets and paths against various metrics\n" +
      "under the categories of safety, accessibility, comfort, directness, attractiveness and\n" +
      "cohesion. However, unlike the ‘Cycling Level of Service’ tool, it also accounts for the\n" +
      "user experience of people walking and wheeling, including people with disabilities.\n" +
      "\n" +
      "1.2 The Route Check is used by ATE for assessing the design quality of linear schemes.\n" +
      "However, it may also be used by local authorities and others wishing to assess the\n" +
      "design quality of schemes against ATE’s quality criteria.\n" +
      "\n" +
      "1.3 When ATE uses the Route Check to assess the design quality of active travel\n" +
      "infrastructure, the main goal is not to pass or fail schemes. Rather, its primary purpose\n" +
      "is to remind designers of key active travel policies, promote best practice and prompt\n" +
      "discussions about design solutions.\n" +
      "\n" +
      "1.4 The Route Check is also intended for use throughout the scheme design process,\n" +
      "meaning that you can identify critical issues and other problems at the feasibility stage\n" +
      "and design them out in later stages before construction.\n" +
      "\n" +
      "1.5 This document is divided into 13 chapters. The next chapter is an overview of the\n" +
      "Route Check tool’s structure, and subsequent chapters (3–13) give more information\n" +
      "on each different section of the tool (see Figure 1).\n" +
      "\n" +
      "1 Local Transport Note 1/20 Cycle Infrastructure Design (DfT) Appendix A\n" +
      "2 https://tfl.gov.uk/corporate/about-tfl/how-we-work/planning-for-the-future/healthy-streets\n" +
      "\n" +
      "\n" +
      "Figure 1 – Route Check User Manual Structure\n" +
      "\n" +
      "1.6 The Route Check tool includes a Policy Check section (described in Chapter 4) and\n" +
      "accompanying Policy Conflict Log (described in Chapter 5). In these sections of the\n" +
      "Route Check, you can assess schemes against six active travel policy principles and\n" +
      "log any instances of policy conflicts. These six principles, derived from Inclusive\n" +
      "Mobility, LTN 1/20 and Gear Change, are key to making sure that active travel\n" +
      "schemes are inclusive for everyone walking, wheeling and cycling, including people\n" +
      "with disabilities.\n" +
      "\n" +
      "1.7 Chapter 6 introduces the Safety Check section, where you can score the scheme\n" +
      "against 16 safety metrics and check for the presence of safety-related critical issues.\n" +
      "You can then log any critical issues you find in the Critical Issues Log, which is dealt\n" +
      "with in Chapter 7.\n" +
      "\n" +
      "1.8 When assessing a street-based scheme, you must fill in the Street Check (introduced\n" +
      "in Chapter 8) and the Street Placemaking Scheme (introduced in Chapter 9). When\n" +
      "assessing a traffic-free path, you must fill in the Path Check (introduced in Chapter 10)\n" +
      "and the Path Placemaking Check (introduced in Chapter 11).\n" +
      "\n" +
      "1.9 The Route Check also introduces a new version of the Junction Assessment Tool\n" +
      "(JAT), a framework for assessing pedestrian and cycle movements at junctions. LTN\n" +
      "1/20 introduced a version of the JAT nationally, but that version of the JAT only covered\n" +
      "cycle movements at junctions. The Route Check introduces an expanded version of\n" +
      "this framework, which also accounts for pedestrian movements. You must assess and\n" +
      "score cyclist and pedestrian movements on certain types of junction along the route.\n" +
      "You can find more information on this section, including which junction types must be\n" +
      "assessed in the JAT, in Chapter 12.\n" +
      "\n" +
      "1.10 Chapter 13 introduces the Results tabs and explains how to interpret results and what\n" +
      "might happen after a Route Check has been completed. It also contains information\n" +
      "on how the Route Check calculates scores.\n" +
      "\n" +
      "\n",
  },
  {
    sectionName: "‌Defining an Area‌",
    content:
      "2. Route Check Structure\n" +
      "\n" +
      "2.1 The Route Check, being an Excel-based tool, uses various tabs to categorise and\n" +
      "organise the design assessment process. These tabs are divided into input tabs and\n" +
      "output tabs. Some input tabs are mandatory, and others are optional. Every tab\n" +
      "corresponds to a chapter in this user manual.\n" +
      "\n" +
      "2.2 The input and output tabs are summarised in Figure 2 below, which shows them in the\n" +
      "order they appear in the spreadsheet, as well as which tabs are optional depending on\n" +
      "whether a street or path is being assessed.\n" +
      "\n" +
      "Figure 2 – Summary of the Route Check workflow in terms of the tabs in the\n" +
      "spreadsheet\n" +
      "\n" +
      "2.3 This chapter explains these tabs in more detail.\n" +
      "\n" +
      "Input tabs\n" +
      "\n" +
      "2.4 The first five tabs are all mandatory input tabs (Figure 3). These are coloured green,\n" +
      "and must be completed regardless of whether your scheme is based on streets or\n" +
      "traffic-free paths.\n" +
      "\n" +
      "Figure 3 – The first five input tabs, which are mandatory to complete for all schemes.\n" +
      "\n" +
      "\n" +
      "2.5 The Summary of Scheme tab must be completed. Here, you fill in details of the\n" +
      "scheme such as its name, length, design stage and wider network context. It is\n" +
      "also traffic-free paths. It is highly important that you select this correctly as it affects\n" +
      "how the spreadsheet works. More information can be found in Chapter 3 of this\n" +
      "user manual.\n" +
      "\n" +
      "2.6 The Policy Check tab asks you to answer six questions about how well the existing\n" +
      "situation and proposed design align with six active travel policy principles. You must\n" +
      "complete this tab for all schemes. You can find more information in Chapter 4 of this\n" +
      "user manual. All Route Check questions and metrics have a unique code which\n" +
      "references the relevant section of the tool. The ‘PO’ prefix is used for the six Policy\n" +
      "Check questions (PO01–PO06).\n" +
      "\n" +
      "2.7 The Policy Conflict Log tab is where you are asked to log each existing policy\n" +
      "conflict as well as any thrown up by the proposed scheme design. This section is\n" +
      "separate from the Policy Check because there may be multiple instances of the same\n" +
      "policy conflict on the same route. You must log each of these individually, adding\n" +
      "location and other information. If there are no policy conflicts in the existing scheme or\n" +
      "design, you can leave this section blank. You can find more information on the Policy\n" +
      "Conflict Log section of the tool in Chapter 5 of this user manual.\n" +
      "\n" +
      "2.8 In the Safety Check tab, you must assess and score the existing situation and\n" +
      "proposed design against 16 safety metrics, each of which could potentially score as a\n" +
      "‘critical issue’. This tab must be completed for all types of scheme. Some safety\n" +
      "metrics may be less applicable to traffic-free path schemes. If this is the case, you can\n" +
      "choose ‘not applicable’ as your answer if the metric doesn’t apply. The SA prefix is\n" +
      "used for the 16 Safety Check metrics (SA01–SA16). You can find more information\n" +
      "on the Safety Check in Chapter 6 of this user manual.\n" +
      "\n" +
      "2.9 The Critical Issues Log tab is where you are asked to log every critical issue present\n" +
      "in the existing situation as well as in the proposed scheme design. This section is\n" +
      "separate from the Safety Check because there may be multiple instances of the same\n" +
      "safety conflict on the same route. You must log each of these individually, adding\n" +
      "location and other information. If there are no critical issues in the existing scheme or\n" +
      "design, you can leave this section blank. You can find more information on the Critical\n" +
      "Issues Log section of the tool in Chapter 7.\n" +
      "\n" +
      "2.10 The next two Route Check tabs (Figure 4) are also input tabs. You must complete\n" +
      "them if the scheme is based on a street and leave them empty if it is based on a\n" +
      "traffic-free path.\n" +
      "\n" +
      "```\n" +
      "4.1. Street Check 4.2. Street Placemaking Check\n" +
      "```\n" +
      "Figure 4 – The two ‘street’ input tabs, which are mandatory to complete for street-\n" +
      "based schemes.\n" +
      "\n" +
      "\n" +
      "2.11 The Street Check tab asks you to assess and score the existing situation and\n" +
      "proposed scheme design against 26 metrics categorised under accessibility, comfort,\n" +
      "directness, attractiveness and cohesion. You must complete this tab for all street-\n" +
      "based schemes. The ST prefix is used for the 26 Street Check metrics (ST17–ST42).\n" +
      "You can find more information in Chapter 8 of this user manual.\n" +
      "\n" +
      "2.12 The Street Placemaking tab asks you to assess and score the existing situation and\n" +
      "proposed scheme design against 26 street placemaking metrics, categorised under\n" +
      "social activity, personal security, character and legibility and the environment. The SP\n" +
      "prefix is used for the 26 Street Placemaking Check metrics (SP1–SP26). You can\n" +
      "find more information in Chapter 9 of this user manual.\n" +
      "\n" +
      "2.13 The next two Route Check tabs (Figure 5) are also input tabs and you must complete\n" +
      "them if the scheme is based on a traffic-free path and leave them empty if it is based\n" +
      "on a street.\n" +
      "\n" +
      "```\n" +
      "5.1. Path Check 5.2. Path Placemaking Check\n" +
      "```\n" +
      "Figure 5 – The two ‘path’ input tabs, which are mandatory to complete for schemes\n" +
      "based on traffic-free paths.\n" +
      "\n" +
      "2.14 The Path Check tab asks you to assess and score the existing situation and\n" +
      "proposed scheme design against 30 metrics categorised under accessibility, comfort,\n" +
      "directness, attractiveness and cohesion. This tab must be completed for all schemes\n" +
      "based on traffic-free paths. The PA prefix is used for the 30 Path Check metrics\n" +
      "(PA17– PA46). You can find more information in Chapter 10.\n" +
      "\n" +
      "2.15 The Path Placemaking Check tab asks you to assess and score the existing\n" +
      "situation and proposed scheme design against 19 path placemaking metrics,\n" +
      "categorised under social activity, personal security, character and legibility, and the\n" +
      "environment. The PP prefix is used for the 19 Path Placemaking Check metrics\n" +
      "(PP01–PP19). You can find more information in Chapter 11 of this user manual.\n" +
      "\n" +
      "2.16 The final input tab in Route Check is the JAT Check tab (Figure 6), which must be\n" +
      "completed if there are specific junction types along the route, regardless of whether\n" +
      "the scheme is based on streets or traffic-free paths. The JAT Check tab contains the\n" +
      "Junction Assessment Tool Check, which asks you to assess and score pedestrian and\n" +
      "cycle movements at certain types of junction for both the existing situation and\n" +
      "proposed scheme design. You must complete the JAT Check if the scheme has any of\n" +
      "these types of junctions. You can find more information on the JAT Check, including\n" +
      "which junction types you must assess and score, in Chapter 12.\n" +
      "\n" +
      "6. JAT Check\n" +
      "\n" +
      "Figure 6 – The final input tab, which is mandatory to complete for any schemes which\n" +
      "contain signal-controlled junctions or roundabouts.\n" +
      "\n" +
      "\n" +
      "2.17 It sometimes happens that while you are filling in the later tabs in Route Check and\n" +
      "getting into the design details, you may reconsider scores in the earlier tabs, or notice\n" +
      "extra policy conflicts or critical issues that you did not log previously. You can always\n" +
      "go back to earlier tabs and amend or add to them.\n" +
      "\n" +
      "Output tabs\n" +
      "\n" +
      "2.18 The final three Route Check tabs (Figure 7) are all output tabs, which are coloured\n" +
      "purple and give the results of the Route Check assessments in three different forms.\n" +
      "You can find more information on these tabs in Chapter 13.\n" +
      "\n" +
      "```\n" +
      "7.1. Results Summary 7.2. Results Further Analysis 7.3. Results Export\n" +
      "```\n" +
      "Figure 7 – The three output tabs\n" +
      "\n" +
      "2.19 The Results Summary tab gives a concise snapshot of key results by section.\n" +
      "It focuses on how many issues remain in the proposed design and the changes in\n" +
      "scores between the existing situation and the proposed design.\n" +
      "\n" +
      "2.20 The Results Further Analysis tab gives a full summary of the quantitative results of\n" +
      "the Route Check assessment, with some additional analysis. For example, you can\n" +
      "see how schemes score by mode of active travel.\n" +
      "\n" +
      "2.21 The Results Export tab gives a full summary of both the qualitative and quantitative\n" +
      "results of the Route Check assessment, optimised for export into PDF file format.\n" +
      "\n" +
      "\n",
  },
  // {
  //   sectionName: "‌Area Check Structure‌‌",
  //   elements: [
  //     " The Area Check consists of three input tabs and one output tab. You work through the input tabs consecutively as shown in Figure 1 below: Figure 1 – Area Check input tabs Summary of Scheme ",
  //     " It is important to fill the Summary of Scheme tab in to make sure you provide a complete, accurate record of key scheme information. You should populate as many of the fields in the Summary of Scheme tab as you can before moving to the next tab. If you don’t have some of this information, you can contact the relevant member of ATE’s Regional Management team for it. ",
  //     " The fields in the first table under the Summary of Scheme tab are: Date of Design Review is for the date (or dates) on which the design review took place. Scheme Reference is for the relevant funding programme scheme reference, if applicable. Scheme Name means the name of the scheme according to the funding programme. Scheme Summary can be used to give a brief description of the area scheme, including any relevant programme-level information. Scheme Information Reviewed is where you should give information about the documents the review is based on. For example, if a General Arrangement drawing has been reviewed, you should enter details here. Authority means the provisioning authority for the scheme. Transport/Combined Authority means the combined authority, if the scheme is in a combined authority area. Region is the part of England where the scheme is located. There are also options for Scotland, Wales and Northern Ireland. Funding Programme means the main funding source for the scheme. Design Stage is the current design stage of the scheme. Funding Conditions are any specific conditions regarding infrastructure attached to the relevant funding programme. Inspector Email Address means the email address of the ATE inspector who completed the design review. If someone outside of ATE completed the spreadsheet, then you should leave this section blank, and put details in the ‘Notes’ field. Scheme Area Size (km2) is where you should enter the size of the area scheme being assessed in square kilometres. Notes is a space where you can add any other relevant notes on the scheme or design review. ",
  //     " The Network Context section gives you the opportunity to talk about the context of the area being assessed if, for example, it is part of a wider programme or scheme that contains multiple connected areas and routes. You should include a drawing or plan to show which area is being assessed in the file, and give details of any neighbouring areas being assessed in separate files, as well as any neighbouring areas that are not part of the wider scheme. Traffic Mitigation Check ",
  //     " The Traffic Mitigation Check tab asks you to respond to a sequence of questions on the anticipated effects of the scheme on motor vehicle traffic. It is important that you complete the Traffic Mitigation Check before moving on to the Area Scorecard as its results can cause you to redesign parts of your scheme before proceeding to the Area Scorecard test. ",
  //     " Further information on the Traffic Mitigation Check’s purpose and logic is given in the Traffic Mitigation Check section of this user manual (Section 4). ",
  //     " To carry out the Traffic Mitigation Check, you start at the top and work downwards until you cannot ‘proceed to the next question’, and a result is generated. You then make a comment on the results of the check in the assigned box. This process is illustrated in Figure 2 below. Figure 2 – The Traffic Mitigation Check process Area Scorecard ",
  //     " Once you have done the Traffic Mitigation Check, you can fill in the Area Scorecard. ",
  //     " In this section, you must score the existing and proposed area design against nine metrics. You can do this by selecting ‘yes’ against the descriptor that best matches the situation being assessed. ",
  //     " You must give a short justification for each of the scores you chose in the adjacent boxes (highlighted in Figure 3 below), along with any assumptions you made. ",
  //     " Once you have chosen a score for all nine metrics, you will see the total scores for both ‘Existing’ and ‘Proposed’ scenarios at the top of the page. &zwnj;Figure 3 – Descriptor justification boxes in the Area Scorecard ",
  //     " Don’t choose ‘yes’ for more than one descriptor per metric, otherwise the spreadsheet will not know which score to assign and the error message shown below in Figure 4 will appear: &zwnj;Figure 4 – Error message with selection of two or more descriptors ",
  //     " Some metrics have been split into two strands: one for walking and wheeling, and one for cycling. This is because there are different relevant criteria to assessing the quality of the pedestrian network compared to assessing the quality of the cycle network (the mesh density metric shown in Figure 5, for example, which is explained further in Section 5). &zwnj;Figure 5 – Mesh density metric in the Area Scorecard ",
  //     " The total potential scores for each metric are shown in Figure 6 below. The first four metrics are split by mode to make them easier to assess. Later metrics are weighted more heavily to reflect their importance to the design of an area scheme. Metric Mode Mode Score Total Score Porosity Walking and wheeling 4 8 Cycling 4 Crossings Walking and wheeling 4 8 Cycling 4 Permeability Walking and wheeling 4 8 Cycling 4 Mesh Density Walking and wheeling 4 8 Cycling 4 Motorised through-traffic All modes 8 8 Perimeter treatment design All modes 16 16 Green infrastructure design All modes 12 12 Other internal treatment design All modes 16 16 Engagement practice All modes 16 16 Total 100 Figure 6 – Summary of metric scores for the Area Scorecard. ",
  //   ],
  // },
  // {
  //   sectionName: "‌Traffic Mitigation Check‌",
  //   elements: [
  //     " The purpose of the Traffic Mitigation Check is firstly to understand if the scheme is expected to reduce motor vehicle traffic, and secondly to understand whether any traffic will be displaced and mitigating interventions will be needed. The flowchart in Figure 8 illustrates the logic of this check. ",
  //     " If you anticipate motor traffic displacement, you will need to analyse which streets and places are likely to be affected. This is especially important where there are sensitive receptors locally. A sensitive receptor is a place used by people who are at a higher risk from exposure to air pollution and likely to be more affected by potential increases in traffic and congestion. Examples include educational, medical and care facilities. ",
  //     " For example, if you expect to displace traffic onto a street where there is a primary school, then you should consider making changes to the area scheme to divert this traffic. If this is not feasible, then you may have to add suitable mitigation measures to the scheme to give the school protection against possible increases in air pollution or collision risks. If suitable mitigation is not possible, then you may need to redesign the scheme. ",
  //     " Ultimately, if an area scheme directly causes moderate or substantial increases in congestion or pollution, and the mitigations proposed to counter this are inadequate, then the overall scheme design will need to be reconsidered. Comments on the proposed results, including any assumptions made during the check, should be provided in the box next to the check (shown in Figure 7). &zwnj;Figure 7 – Proposed results box for the Traffic Mitigation Check Proceed with the scheme Major Routes YES START NO Is the scheme expected to reduce traffic YES Is it expected to reduce traffic both within the scheme and elsewhere? NO Where will the displaced traffic go? Stop. Redesign the scheme to reduce traffic Minor Routes Redesign Scheme with alternative diversionary routes, a wider focus, or mitigation measure to protect sensitive receptor YES Are there sensitive receptors on these streets or to the existing pollution levels exceed or approach limit values? Are there sensitive receptors present? NO Is the scheme expected to add significant levels of traffic or congestion to any part of the road network? Do the major routes(s) exceed or approach the pollution limit values? YES Address major route congestion and/or pollution through wider schemes. A range of examples are given in the User Guide. YES NO NO Redesign scheme with alternative diversionary routes or wider focus Redesign scheme with alternative diversionary routes, a wider focus, or mitigating measures to protect sensitive receptors Proceed with the scheme Is the major route suitable for local solutions, does it need wider measures, or are both currently inadequate? YES NO Is the scheme expected to add significant levels of traffic or congestion to these streets? NO Proceed with the scheme LOCAL: Consider local solutions, either as part of scheme or with a new scheme, where possible. A range of examples are given in the user guide. WIDER: Address major route congestion and/or pollution through wider schemes. A range of examples are given in the User Guide. If planned measures are inadequate to address pollution levels on the major route, and the scheme will cause ‘moderate’ or ‘substantial ‘ additional pollution, reconsider the scheme &zwnj;Figure 8 – Flowchart illustrating the logic of the Traffic Mitigation Check ",
  //   ],
  // },
  // {
  //   sectionName: "‌Area Scorecard‌",
  //   elements: [
  //     " The Area Scorecard is meant to assess and score the scheme against a range of factors, including quality of place, levels of community engagement and the provision of walking, wheeling and cycling infrastructure for all people, including disabled people. Assessing how these proposed interventions score against the existing situation allows you to gauge the expected transformation of an area scheme. In turn, this may help you identify what improvements are needed to make sure that any area scheme achieves a strong uplift in score. ",
  //     " There are nine metrics to be scored: Porosity Crossings Permeability Mesh density Motorised through-traffic Perimeter treatment design Green infrastructure design Other internal treatment design Engagement practice ",
  //     " More information and guidance on each of these metrics is included below. Porosity ",
  //     " Porosity measures how easy it is to access an area with a specific transport mode. It is informed by the quantity and placement of ‘gateways’ for that mode on the perimeter of an area. ",
  //     " A ‘gateway’ is an intervention that enables safe, accessible travel into an area. Typically, this is a controlled crossing facility, like a zebra or signal crossing, but it could also be a bridge or an underpass. ",
  //     " A low porosity area has an absence of suitable crossing facilities on its perimeter, causing severance issues. For example, an area bounded by busy streets lacking in controlled pedestrian crossings will be difficult for people walking or wheeling to access, including disabled people. It would score poorly in this metric, as it has few or no gateways serving it. By contrast, an area with multiple gateways or at least one gateway on each side is easier to get into – or more ‘porous’ – and would score well. ",
  //     " In the tool, walking and wheeling porosity is scored separately from cycling porosity, as cycling gateways have different requirements from walking and wheeling gateways. The cycling porosity score is usually lower than the walking and wheeling porosity score. This is because most areas in the UK are more likely to have gateways for walking and wheeling, such as puffin crossings, than they are to have suitable gateways for cycling. ",
  //     " ATE’s separate Route Check tool may also help you review the quality of crossings on perimeter streets, with further guidance on siting crossings. ",
  //     " Figure 9 below shows an example area with only one gateway and low porosity. &zwnj;Figure 9 – Example of low porosity – only one gateway into the area ",
  //     " Figure 10 shows the same example area with multiple gateways and high porosity. &zwnj;Figure 10 – Example of high porosity – at least one gateway per area side Crossings ",
  //     " The quantity, placement and quality of gateways affects how likely it is that people will walk, wheel and cycle to and through an area. Since crossings are the most common form of gateway, it is important that you choose and design them carefully. They must be suitable for the volume and 85th percentile speed of motor vehicle traffic, as well as the geometry of the street. Further information on this can be found in LTN 1/20 Table 10-2 (Crossing Design Suitability) and Chapter 6 of the Traffic Signs Manual. ATE’s Crossing Selector Tool may also help you identify suitable design arrangements in certain contexts. ",
  //     " It is also important that you review and consider desire lines for people walking, wheeling and cycling as part of your perimeter treatment designs. In the case of an area next to a park, there is likely to be a strong desire line between that area and the park entrance. If this desire line is not being met, either due to the lack of a suitable crossing or the crossing being too far from the desire line, then there is a higher risk that people walking, wheeling or cycling may come into direct conflict with motor vehicles. ",
  //     " Scoring descriptors for walking and wheeling and cycling are slightly different, as cyclists cannot legally cycle across pedestrian crossings. For example, a puffin crossing is a pedestrian-only crossing and cannot be counted as a cycle crossing. ",
  //     " While toucan crossings will provide separation in time and space from motor vehicles, they inevitably increase interactions between people walking, wheeling and cycling. This is especially important when considering the needs of disabled people. Context and street conditions will always play a part but crossing facilities that separate people walking and wheeling from those cycling should be prioritised where possible. Examples of these crossings include ‘sparrow’ crossings (which are signalised crossings with parallel crossing areas for pedestrians and cyclists) and parallel crossings (zebra-style crossings with parallel crossing areas for pedestrians and cyclists). ",
  //     " You can improve existing pedestrian crossings by converting them to cater for pedestrians and cyclists alike while keeping them separate. For example, you can upgrade a zebra crossing to a parallel crossing, or a puffin crossing to a sparrow crossing. Permeability ",
  //     " ‘Permeability’ measures how easy it is to walk, wheel and cycle through an area. The quality of the pedestrian and cycle network informs it, and you can assess this in terms of level of service. ATE’s Route Check, which is based on core design guidance such as DfT Inclusive Mobility guidance and LTN 1/20, is a thorough way to assess pedestrian and cycle network levels of service. However, since a full Route Check assessment needs an advanced level of design detail, which may not be available for every street in and around an area, we have provided a simplified way of working out pedestrian and cyclist levels of service below. ",
  //     " For a pedestrian network, suitable routes are defined as those which satisfy the following minimum accessibility requirements: Smooth, sealed footway surfaces. Dropped kerbs with suitable gradients and appropriate tactile paving surfaces at crossing locations. Suitable footway widths as defined in DfT’s Inclusive Mobility guidance. Suitable tactile paving surfaces. Acceptable footway camber (≤2.5%). Minimal street clutter. Appropriate street lighting. ",
  //     " It is also important to consider the wider accessibility of public transport facilities in the area, as a walking or wheeling trip may be one stage of a multi-modal journey. For example, the siting and design of bus stops in and around an area is an important factor in this regard. Further guidance can be found in DfT’s Inclusive Mobility: A guide to Best Practice on Access to Pedestrian and Transport Infrastructure. ",
  //     " For the cycle network, quality routes are where provision is proportionate to the surrounding street conditions and where there are no critical issues as defined in ATE’s Route Check. For example, it may be suitable to mix cyclists with traffic in the carriageway if motor vehicle volumes and 85th percentile speeds are sufficiently low, and traffic lane widths are not in the critical range (3.25–3.9m). As discussed in the two previous sections, it is also important for network connectivity that cycle routes start and end with high-quality crossings. ",
  //     " In the context of area permeability, a route, either as part of the pedestrian or cycle network, is typically defined as running from one side of an area to another. Routes should be direct and follow the shortest practical distance. For additional assurance, you can carry out a full ATE Route Check assessment to confirm route quality. ",
  //     " Figure 11 below shows an example area with low walking and wheeling permeability. &zwnj;Figure 11 – Example of low walking and wheeling permeability – One route with all of the features from the list ",
  //     " Figure 12 below shows the same example area with high walking and wheeling permeability. &zwnj;Figure 12 – Example of high walking and wheeling permeability – Multiple routes with all of the features from the list ",
  //     " Figure 13 below shows an example area with no cycling permeability. &zwnj;Figure 13 – Example of low cycling permeability – No routes through the area ",
  //     " Figure 14 below shows the same example area with high cycling permeability. &zwnj;Figure 14 – Example of high cycling permeability – Multiple quality routes which start and end with high quality crossings. Mesh Density ",
  //     " ‘Mesh density’ is a measure of how extensive the wider pedestrian and cycle networks are, both inside and around an area. It is measured by the average distance between parallel streets that are considered suitable for most people to walk, wheel and cycle, including people with disabilities (as defined by the same minimum quality standards as for the permeability metric above). ",
  //     " The reason for analysing mesh density is to check that there is good pedestrian and cycle network coverage in the wider area. This is particularly important for larger areas where multiple routes – if designed to be direct and high-quality – offer more choice and attractive journey times to a large population. ",
  //     " The ranges for scoring mesh density given in the Area Check are higher for cycling than for walking and wheeling. This reflects that cyclists may be more willing to deviate further from their main direction of travel as they are likely to be travelling further and faster than pedestrians. ",
  //     " We recommend you use Geographic Information System (GIS) software to establish an accurate mesh density score for an area. Motorised Through-Traffic ",
  //     " It is important that the design of any area scheme is carried out in collaboration with the local community to make sure that proposed interventions do not affect some people disproportionately, such as blue badge holders or community transport users and providers. Where traffic management alterations are made, relevant legislation must be followed. ",
  //     " Through-traffic is defined as vehicles passing through an area without stopping at local destinations. Area schemes offer an opportunity to redesign an area based on community needs and desires, bringing holistic benefits from less through-traffic such as better air quality, better road safety and reduced noise pollution. There is evidence that motor vehicle traffic volumes and speeds affect existing and potential walkers, wheelers and cyclists in terms of real and perceived safety. ",
  //     " While the Traffic Mitigation Check gives guidance on displacement strategies for motor vehicle traffic, the reason for including the Motorised Through-Traffic metric in the Area Scorecard is to assess the effectiveness of the design of area-wide interventions in terms of reducing motorised through-traffic. ",
  //     " Where area schemes try to reduce motorised through-traffic, they should not do so in a way that stops local access to destinations such as residential properties, business units or public transport facilities. Schemes should focus instead on reducing through-traffic while providing and/or maintaining suitable access routes. Exemptions to through-traffic restrictions should be considered for disabled people, including blue badge holders, emergency services, buses, taxis, private hire vehicles, emergency services, community transport providers and blue badge holders. ",
  //     " Area schemes that fully address motorised through-traffic routes will score well, while those that do not, or only partially address routes without providing suitable mitigation, will score poorly. There may be good reasons why a specific motorised through-traffic route needs to be maintained but, where this is the case, mitigation measures should be put in place to make sure that any likely negative impacts are suitably addressed. For example, controlled crossings might be necessary to help people cross the street if traffic volumes are going to be high on certain routes. You should include details of why you have left motorised through-traffic routes in place, along with their expected impacts and proposed mitigations, in column L (the scoring justification box) of the Area Scorecard tab. ",
  //     " Interventions to reduce motorised through-traffic include modal filters, timed traffic restrictions, banned movements and bus gates. These should be considered in the context of the broader pedestrian and cycle network as they have the potential to significantly improve on-street conditions for people walking, wheeling and cycling, including disabled people. A bus gate may help reduce motor vehicle traffic to the point where it is suitable for most people to cycle in that traffic, for example. It could also offer the opportunity to look at the overall street space again and incorporate footway and placemaking enhancements. Perimeter Treatments ",
  //     " Where you are proposing interventions to reduce motorised through-traffic, and it is expected that most of this traffic will be displaced to the perimeter streets, it is important that you consider any potential issues that might result on these streets. Issues that may arise on perimeter streets include potential increases in: Motor traffic volume and congestion Motor traffic speed Collisions or collision severity Air or noise pollution Delays to public transport ",
  //     " It is important that your scheme addresses and mitigates any such issues wherever possible, particularly where there are sensitive receptors on the area perimeter. For example, where you anticipate more congestion on one or more perimeter streets, you should consider possible junction improvements to increase traffic capacity, reduce queue lengths and smooth traffic flows. If there is a bus route on a perimeter where you expect increased traffic, you could consider bus lanes or bus gates to reduce delays to public transport journey times. ",
  //     " Your designs should be proportionate to the place and movement function of a perimeter street, as explained in Manual for Streets. The level of protection needed for cyclists will likely be higher on a main arterial route than a neighbourhood street, for example. Ultimately, we recommend a holistic approach to area schemes, and you should review perimeter treatments alongside the internal organisation of an area. Wider local pedestrian and cycle network strategies, such as LCWIPs, should also inform the prioritisation and design of perimeter treatments. ",
  //     " You can use the ATE Route Check to review the design quality of perimeter treatments for people walking, wheeling and cycling, including people with disabilities. The ATE Cross-Section Tool may also be useful to assess what interventions are possible in the space available on perimeter streets. Green Infrastructure Design ",
  //     " Incorporating green infrastructure into area schemes can help make streets more pleasant places to be, as well as enhancing their climate resilience and improving biodiversity. Areas with a variety of green infrastructure measures will score higher than areas that have fewer measures or achieve an overall net loss. There are multiple options to consider, such as: Sustainable drainage systems (SuDS) Planters Parklets or pocket parks Trees Soft landscaping, for example planting of wildflowers/hedges/shrubs Community gardens Green roofs, for example on bus stops Green walls or screens Bug hotels ",
  //     " This is not an exhaustive list and you can consider other measures if they can be suitably justified. For example, you can consider blue infrastructure beyond SuDS if it helps make the area a more pleasant, temperate place to be, enhance its climate resilience and/or improve its biodiversity. ",
  //     " It is worth considering how street functions can be merged when designing internal treatments. For example, you can incorporate planters into modal filters or combine them with seating, and incorporate trees or SuDS into new public spaces to provide shade and manage surface water. ",
  //     " Where sensitive receptors may be affected by displaced motor vehicle traffic, you can consider green infrastructure measures as contributing towards mitigation, as they can capture certain air pollutants (assuming the kind and amount of green infrastructure is apposite to the anticipated effects from displaced traffic). ",
  //     " You should carry out green infrastructure design in line with DfT Inclusive Mobility guidance. For example, new trees or planters should be placed in a way that does not restrict footways beyond recommended clearance widths. You can use ATE’s Route Check tool and Route Cross-Section tool to check appropriate widths for footways and cycle tracks. Considersation should also be given to the choice of tree, tree pit and the need for maintenance. Trees should not be planted that will then grow to then damage footways or create obstructions. For more guidance, see the Forestry Commission’s Operations Note 51 on highway tree management. Other Internal Treatments ",
  //     " The internal treatments discussed in the previous sections mostly focus on interventions to address motorised through-traffic, the safety of existing active travel facilities and green infrastructure. This metric complements these as it promotes the consideration of improvements to accessibility, attractiveness and placemaking to give people more reasons to walk, wheel and cycle to and through an area. Such improvements might include (but are not limited to): Play streets School streets Cycle parking/hangars Places to rest, like seating Raised tables/entries or continuous footways New social spaces Parklets or pocket parks Wayfinding Art ",
  //     " Area schemes featuring a variety of these treatments will achieve a higher score for this metric. For example, school streets, play streets, new social spaces, parklets and pocket parks can all make streets more inclusive and encourage social activity. It is important that you develop such proposals together with local stakeholders to make sure that internal treatments meet the many needs of local communities. Parklets and pocket parks feature in both this metric and the previous green infrastructure metric, as they can have multiple functions. ",
  //     " You should design internal treatments in line with DfT Inclusive Mobility guidance. For example, new seating should comply with recommended specifications. The ATE Route Check also includes several metrics relevant to the type, quantity and placement of internal treatments. Engagement practice ",
  //     " Engagement is critical to the success of all area schemes. Schemes designed with no or limited engagement are less likely to address local needs and be accepted by the local communities you seek to serve. When assessing the existing engagement practice scenario, you can use a score of 0 as default, unless there is evidence of good engagement on recent schemes. ",
  //     " Engagement must be inclusive, comprehensive and meaningful for area schemes to succeed and their benefits realised. Engagement channels must set up an effective dialogue between scheme promotors and scheme recipients. ",
  //     " It is important to engage with local accessibility groups throughout the planning, design and implementation of area schemes, to make sure that they are fully inclusive and do not negatively affect disabled people. ",
  //     " On some occasions, there might be uncertainty around the effects of an area scheme. If this is the case, you could implement temporary measures or treatments with a comprehensive monitoring programme, to evaluate their effectiveness. ",
  //   ],
  // },
  // {
  //   sectionName: "‌Outputs‌",
  //   elements: [
  //     " Once you have completed the Area Scorecard, you can move on to the Results &amp; Commentary tab, which summarises the results of the Area Check. The tool will automatically populate the Traffic Mitigation Check results and Area Scorecard boxes and calculate and show an uplift score for the latter. You then only have to provide a final comment on the scores and recommendations to be considered for the area scheme. ",
  //     " If ATE is completing the Area Check on behalf of a local authority, then recommendations will be included in the final comments for the scheme. ",
  //     " If a local authority is undertaking an assessment of their own area scheme, then scores should be reviewed and compared against any higher-scoring descriptors, with consideration given to what might be achievable to improve the overall level of service for the area. ",
  //     " ATE has not set general minimum score thresholds for area schemes, although thresholds may be set for specific funding programmes in the future. Good schemes will improve walking, wheeling and cycling facilities in an area, mitigate displaced traffic around it effectively, address accessibility problems and demonstrate significant transformation with a strong uplift score. They will also clearly evidence diligent, inclusive engagement practices with local people. ",
  //   ],
  // },
];
