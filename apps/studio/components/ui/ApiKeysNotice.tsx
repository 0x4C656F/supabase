import { Sparkles } from 'lucide-react'
import Panel from 'components/ui/Panel'
import { Tabs_Shadcn_, TabsList_Shadcn_, TabsTrigger_Shadcn_, buttonVariants, cn } from 'ui'
import { useLocalStorageQuery } from 'hooks/misc/useLocalStorage'
import { LOCAL_STORAGE_KEYS } from 'lib/constants'

const ApiKeysNotice = () => {
  const [apiKeysView, setApiKeysViewState] = useLocalStorageQuery(
    LOCAL_STORAGE_KEYS.API_KEYS_VIEW,
    'new-keys'
  )

  return (
    <Panel.Notice
      icon={<Sparkles />}
      className={cn(
        'relative px-6 py-5 bg-studio flex flex-col lg:flex-row lg:justify-between gap-6 overflow-hidden lg:items-center border rounded-md'
      )}
      title={'Publisable and Secret API keys are available'}
      description="New API keys are available. They are more secure and easier to manage than legacy API keys."
      badgeLabel={'New feature'}
      action={
        <Tabs_Shadcn_
          defaultValue={apiKeysView}
          className="relative"
          value={apiKeysView}
          onValueChange={setApiKeysViewState}
        >
          <TabsList_Shadcn_ className="flex gap-1 p-1 bg-surface-75 bg-opacity-100 border rounded-lg">
            <TabsTrigger_Shadcn_
              value="new-keys"
              className={cn(
                buttonVariants({
                  type: apiKeysView === 'new-keys' ? 'default' : 'text',
                  size: 'tiny',
                }),
                apiKeysView !== 'new-keys' ? 'text-foreground-lighter' : '!border-foreground-muted',
                'flex gap-2'
              )}
            >
              <Sparkles size={13} strokeWidth={1.2} className="text-foreground-light" />
              New Keys
            </TabsTrigger_Shadcn_>
            <TabsTrigger_Shadcn_
              value="legacy-keys"
              className={cn(
                buttonVariants({
                  type: apiKeysView === 'legacy-keys' ? 'default' : 'text',
                  size: 'tiny',
                }),
                apiKeysView !== 'legacy-keys'
                  ? 'text-foreground-lighter'
                  : '!border-foreground-muted'
              )}
            >
              Legacy Keys
            </TabsTrigger_Shadcn_>
          </TabsList_Shadcn_>
        </Tabs_Shadcn_>
      }
    />
  )
}

export default ApiKeysNotice
