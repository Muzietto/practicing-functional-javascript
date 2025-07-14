<MultipleEntryReferenceEditor
sdk={sdk}
hasCardEditActions
hasCardMoveActions
parameters={{ instance: {
  showCreateEntityAction: true,
  showLinkEntityAction: true,
} }}
renderCustomCard={(props, linkActionsProps, renderDefaultCard) => {
  return (props.entity.fields.checkboxChecked)
? <Card 
testId={`custom-card_${Math.random()}`}
withDragHandle
>
  <Paragraph>{props.entity.fields.name['it-IT']}</Paragraph>
  <Checkbox
name={'newsletter-subscribe-controlled_${Math.random()}'}
id={'newsletter-subscribe-controlled_${Math.random()}'}
isChecked={props.entity.fields.checkboxChecked['it-IT']}
  />
</Card>
: renderDefaultCard(props);
    }
}
viewType='entry'
isDisabled={fieldControl.disabled}
/>