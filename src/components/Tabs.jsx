export default function Tabs({children, buttons, ButtonsContainer}) {
    //_const ButtonsContainer = buttonsContainer;
    return(
        <>
            <ButtonsContainer>
                {buttons}
            </ButtonsContainer>
            {children}
        </>
    )
}