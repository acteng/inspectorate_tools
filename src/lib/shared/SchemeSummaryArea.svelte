<DateInput
  label="Date of design review"
  bind:value={$state.summary.dateDesignReview}
/>
<TextInput
  label="Scheme reference"
  bind:value={$state.summary.schemeReference}
/>
<TextInput label="Scheme name" bind:value={$state.summary.schemeName} />
<TextArea label="Scheme summary" bind:value={$state.summary.schemeSummary} />
<TextArea
  label="Scheme information reviewed"
  bind:value={$state.summary.schemeInfoReviewed}
/>

<Select
  label="Authority"
  emptyOption
  choices={pairs(authorities)}
  bind:value={$state.summary.authority}
/>
<Select
  label="Transport / Combined Authority"
  emptyOption
  choices={pairs(transportOrCombinedAuthorities)}
  bind:value={$state.summary.transportOrCombinedAuthority}
/>
<SelectWithCustom
  label="Region"
  emptyOption
  choices={pairs(regions)}
  bind:value={$state.summary.region}
/>
<SelectWithCustom
  label="Funding programme"
  emptyOption
  choices={pairs(fundingProgrammes)}
  bind:value={$state.summary.fundingProgramme}
/>
<SelectWithCustom
  label="Design stage"
  emptyOption
  choices={pairs(designStages)}
  bind:value={$state.summary.designStage}
/>
<TextArea
  label="Funding conditions"
  bind:value={$state.summary.fundingConditions}
/>

<TextInput
  label="Inspector email address"
  bind:value={$state.summary.inspectorEmail}
/>
